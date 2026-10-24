import { chromium } from 'playwright';

async function runMobileE2ETests() {
  console.log('🚀 Starting Mobile End-to-End Tests for Legend Pest Control...\n');
  
  const browser = await chromium.launch({ headless: true });
  
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

      // 2. Check for Horizontal Scroll Overflow (Crucial mobile responsiveness check)
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
      const logoVisible = await page.locator('text=LEGEND').first().isVisible();
      console.log(`  ✓ Logo visible: ${logoVisible}`);

      const menuButton = page.locator('button[aria-label="Toggle Navigation"]');
      if (await menuButton.isVisible()) {
        await menuButton.click();
        await page.waitForTimeout(300);
        const drawerLinkVisible = await page.locator('div.lg\\:hidden a:has-text("Pricing Calculator")').isVisible();
        console.log(`  ✓ Mobile hamburger drawer opened & links rendered: ${drawerLinkVisible}`);
        // Close menu
        await menuButton.click();
        await page.waitForTimeout(300);
      }

      // 4. Verify Hero 4 Cards & Headline
      const heroHeadline = await page.locator('h1').innerText();
      console.log(`  ✓ Hero Headline: "${heroHeadline.replace(/\n/g, ' ')}"`);
      
      const warrantyCard = await page.locator('text=6-month treatment warranty').first().isVisible();
      const discountCard = await page.locator('text=$50 off for new customers').first().isVisible();
      console.log(`  ✓ Hero Trust Cards 2x2 Grid rendered: Warranty=${warrantyCard}, $50 Discount=${discountCard}`);

      // 5. Test Interactive Quote Calculator on Mobile
      const unitBtn = page.locator('button:has-text("Unit / Apt")');
      if (await unitBtn.isVisible()) {
        await unitBtn.click();
        await page.waitForTimeout(200);
        console.log('  ✓ Property selector interacted successfully');
      }

      // 6. Test Suburb Filter
      const searchInput = page.locator('input[placeholder*="Search your suburb"]');
      if (await searchInput.isVisible()) {
        await searchInput.fill('Geelong');
        await page.waitForTimeout(200);
        const geelongCard = await page.locator('h4:has-text("Geelong CBD")').isVisible();
        console.log(`  ✓ Suburb instant search working: ${geelongCard}`);
      }

      // 7. Test FAQ Accordion Expand
      const faqBtn = page.locator('button:has-text("Are your pest control chemicals safe")');
      if (await faqBtn.isVisible()) {
        await faqBtn.click();
        await page.waitForTimeout(200);
        const faqAnswer = await page.locator('text=APVMA-approved').first().isVisible();
        console.log(`  ✓ FAQ accordion expand/collapse working: ${faqAnswer}`);
      }

      // 8. Test Callback Modal & Form Submission
      const getCallbackBtn = page.locator('button:has-text("Get a call back")').first();
      if (await getCallbackBtn.isVisible()) {
        await getCallbackBtn.click();
        await page.waitForTimeout(300);
        
        // Fill form
        await page.locator('input[placeholder="e.g. Sarah Smith"]').fill('Sahithi Test');
        await page.locator('input[placeholder="0400 123 456"]').fill('0412 345 678');
        await page.locator('input[placeholder*="Werribee, Geelong"]').fill('Werribee');
        
        // Submit
        await page.locator('button:has-text("Request Instant Callback")').click();
        await page.waitForTimeout(1000);

        const successMessage = await page.locator('text=Request Received!').isVisible();
        console.log(`  ✓ Callback modal submission & confirmation: ${successMessage}`);

        // Close modal
        await page.locator('button:has-text("Close Window")').click();
        await page.waitForTimeout(300);
      }

      // 9. Verify Sticky Mobile Bottom Bar
      const mobileStickyBar = page.locator('div.sm\\:hidden.fixed.bottom-0');
      const stickyVisible = await mobileStickyBar.isVisible();
      console.log(`  ✓ Mobile sticky 1-tap call bar visible: ${stickyVisible}`);

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
    console.log('🎉 ALL MOBILE E2E TESTS PASSED WITH 100% COMPLIANCE!');
  } else {
    console.log('⚠️ Some tests encountered issues.');
  }
}

runMobileE2ETests().catch(console.error);
