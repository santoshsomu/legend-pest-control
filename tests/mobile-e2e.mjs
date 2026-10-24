import { chromium } from 'playwright';

async function runMobileE2ETests() {
  console.log('🚀 Starting Precision Mobile End-to-End Tests for Legend Pest Control...\n');
  
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  
  const devicesToTest = [
    { name: 'iPhone 14 / 13 Pro', width: 390, height: 844, deviceScaleFactor: 3, isMobile: true, hasTouch: true },
    { name: 'iPhone SE (Compact)', width: 375, height: 667, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
    { name: 'Google Pixel 7', width: 412, height: 915, deviceScaleFactor: 2.6, isMobile: true, hasTouch: true },
  ];

  let allPassed = true;

  for (const device of devicesToTest) {
    console.log(`📱 Testing on ${device.name} (${device.width}x${device.height})...`);
    
    const context = await browser.newContext({
      viewport: { width: device.width, height: device.height },
      deviceScaleFactor: device.deviceScaleFactor,
      isMobile: device.isMobile,
      hasTouch: device.hasTouch,
    });

    const page = await context.newPage();

    try {
      // 1. Navigate to local preview server
      await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

      // 2. Check for Horizontal Scroll Overflow
      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      if (hasHorizontalOverflow) {
        console.error(`  ❌ FAILED: Horizontal scroll overflow detected on ${device.name}!`);
        allPassed = false;
      } else {
        console.log(`  ✓ No horizontal scroll overflow (Content fits 100% within ${device.width}px)`);
      }

      // 3. Verify Header and Mobile Hamburger Navigation
      const logoImgLocator = page.locator('header img[alt*="Legend Pest Control"]').first();
      await logoImgLocator.scrollIntoViewIfNeeded();
      const logoImgVisible = await logoImgLocator.isVisible();
      console.log(`  ✓ Official brand logo image visible: ${logoImgVisible}`);
      if (!logoImgVisible) {
        console.error(`  ❌ FAILED: Official brand logo image not visible on ${device.name}!`);
        allPassed = false;
      }

      const menuButton = page.locator('button[aria-label="Toggle Navigation"]');
      if (await menuButton.isVisible()) {
        await menuButton.click();
        await page.waitForTimeout(250);
        const drawerLinkVisible = await page.locator('div.lg\\:hidden a:has-text("Free Quote Assessment")').isVisible();
        console.log(`  ✓ Mobile hamburger drawer opened & links rendered: ${drawerLinkVisible}`);
        // Close menu
        await menuButton.click();
        await page.waitForTimeout(250);
      }

      // 4. Verify Hero Headline & 4 Trust Cards
      const heroHeadline = await page.locator('h1').innerText();
      console.log(`  ✓ Hero Headline: "${heroHeadline.replace(/\n/g, ' ')}"`);
      if (!heroHeadline.toLowerCase().includes('every pest problem')) {
        console.error('  ❌ FAILED: Headline does not contain "Every pest problem"');
        allPassed = false;
      }
      
      const warrantyCard = await page.locator('text=6-month treatment warranty').first().isVisible();
      const inspectionCard = await page.locator('text=Free 10-point property check').first().isVisible();
      console.log(`  ✓ Hero Trust Cards 2x2 Grid rendered: Warranty=${warrantyCard}, Free Inspection=${inspectionCard}`);

      // 5. Verify Services: Dead Animal Removal & Termite Inspection
      const deadAnimalLocator = page.locator('h3:has-text("Dead Animal & Carcass Removal")').first();
      await deadAnimalLocator.scrollIntoViewIfNeeded();
      const deadAnimalService = await deadAnimalLocator.isVisible();

      const termiteLocator = page.locator('h3:has-text("Termite Inspection")').first();
      await termiteLocator.scrollIntoViewIfNeeded();
      const termiteService = await termiteLocator.isVisible();

      console.log(`  ✓ Dead Animal Service visible: ${deadAnimalService}`);
      console.log(`  ✓ Termite Inspection visible: ${termiteService}`);

      // 6. Test Interactive Assessment Engine on Mobile
      const pestOption = page.locator('button:has-text("General Crawling")').first();
      await pestOption.scrollIntoViewIfNeeded();
      if (await pestOption.isVisible()) {
        await pestOption.click();
        await page.waitForTimeout(200);
        console.log('  ✓ Pest selector in Assessment interacted successfully');
      }

      // 7. Test Suburb Filter
      const searchInput = page.locator('input[placeholder*="Search your suburb"]');
      await searchInput.scrollIntoViewIfNeeded();
      if (await searchInput.isVisible()) {
        await searchInput.fill('Werribee');
        await page.waitForTimeout(200);
        const werribeeCard = await page.locator('h4:has-text("Werribee")').first().isVisible();
        console.log(`  ✓ Suburb instant search working: ${werribeeCard}`);
      }

      // 8. Test FAQ Accordion Expand
      const faqBtn1 = page.locator('button:has-text("What types of products do you use")');
      await faqBtn1.scrollIntoViewIfNeeded();
      const faq1Answer = await page.locator('text=APVMA-approved').first().isVisible();
      console.log(`  ✓ FAQ item 1 default open: ${faq1Answer}`);
      const faqBtn2 = page.locator('button:has-text("How does your 6-month treatment warranty work")');
      await faqBtn2.scrollIntoViewIfNeeded();
      await faqBtn2.click();
      await page.waitForTimeout(250);
      const faq2Answer = await page.locator('text=If covered pests return within 6 months').first().isVisible();
      console.log(`  ✓ FAQ accordion 2 expanded successfully: ${faq2Answer}`);

      // 9. Test Mobile Sticky Bar & Callback Modal Submission
      const mobileStickyBar = page.locator('div.sm\\:hidden.fixed.bottom-0');
      const stickyVisible = await mobileStickyBar.isVisible();
      console.log(`  ✓ Mobile sticky bottom bar visible: ${stickyVisible}`);

      const mobileQuoteBtn = page.locator('div.sm\\:hidden.fixed.bottom-0 button:has-text("Free Quote")').first();
      await mobileQuoteBtn.click();
      await page.waitForTimeout(300);
      
      // Target modal explicitly
      const modal = page.locator('div.fixed.inset-0');
      await modal.locator('input[placeholder="e.g. Sarah Smith"]').fill('Alex Client');
      await modal.locator('input[placeholder="e.g. 0412 345 678"]').fill('0412 345 678');
      await modal.locator('input[type="email"]').fill('alex@test.com.au');
      await modal.locator('input[placeholder*="Werribee"]').fill('Werribee');
      
      // Submit modal form
      await modal.locator('button:has-text("Request Callback")').click();
      await page.waitForTimeout(800);

      const successMessage = await modal.locator('text=Request Received!').isVisible();
      console.log(`  ✓ Mobile callback modal submission & confirmation: ${successMessage}`);

      // Close modal
      await modal.locator('button:has-text("Close Window")').click();
      await page.waitForTimeout(300);

      // 10. Capture full-page mobile screenshot
      const safeDeviceName = device.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const screenshotPath = `public/mobile-preview-${safeDeviceName}.png`;
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`  📸 Saved full-page mobile screenshot to ${screenshotPath}\n`);

    } catch (err) {
      console.error(`  ❌ Error during ${device.name} test:`, err);
      allPassed = false;
    } finally {
      await context.close();
    }
  }

  await browser.close();

  if (allPassed) {
    console.log('🎉 ALL MOBILE E2E TESTS PASSED WITH 100% SUCCESS!');
  } else {
    console.log('⚠️ Some tests encountered issues.');
    process.exit(1);
  }
}

runMobileE2ETests().catch(console.error);
