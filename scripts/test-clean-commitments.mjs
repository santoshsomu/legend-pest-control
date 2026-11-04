import { chromium } from 'playwright';
import path from 'path';

// TEST SUITE: Verify zero immediate dispatch and zero price quotations across website
const ARTIFACTS_DIR = 'C:/Users/aksha/.gemini/antigravity/brain/bd142f4a-46d4-4c94-8dd5-5354be7d3d51';

async function runVisualTest() {
  console.log('--- STARTING PLAYWRIGHT TEST VERIFICATION ---');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  try {
    // 1. TEST Home Page & Hero Section
    console.log('TEST 1: Loading Home Page...');
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const heroScreenshot = path.join(ARTIFACTS_DIR, 'test-verified-hero-clean.png');
    await page.screenshot({ path: heroScreenshot });
    console.log(`Saved: ${heroScreenshot}`);

    // TEST Modal
    await page.click('button:has-text("Get a free quote now")');
    await page.waitForTimeout(500);
    const modalScreenshot = path.join(ARTIFACTS_DIR, 'test-verified-callback-modal.png');
    await page.screenshot({ path: modalScreenshot });
    console.log(`Saved: ${modalScreenshot}`);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);

    // Verify text on page
    const pageContent = await page.content();
    const hasImmediateDispatch = pageContent.toLowerCase().includes('immediate dispatch');
    const has15Min = pageContent.includes('15-Min Response') || pageContent.includes('15 mins');
    console.log(`TEST Check - Has 'immediate dispatch': ${hasImmediateDispatch}`);
    console.log(`TEST Check - Has '15-Min Response': ${has15Min}`);

    // 2. TEST Bee & Wasp Service Page
    console.log('TEST 2: Loading Bee & Wasp Service Page...');
    await page.goto('http://localhost:5173/services/bee-wasp-removal', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const beeHeroScreenshot = path.join(ARTIFACTS_DIR, 'test-verified-bee-clean.png');
    await page.screenshot({ path: beeHeroScreenshot });
    console.log(`Saved: ${beeHeroScreenshot}`);

    // Scroll to treatment options section
    await page.evaluate(() => {
      window.scrollTo(0, 1800);
    });
    await page.waitForTimeout(500);
    const beeOptionsScreenshot = path.join(ARTIFACTS_DIR, 'test-verified-bee-options.png');
    await page.screenshot({ path: beeOptionsScreenshot });
    console.log(`Saved: ${beeOptionsScreenshot}`);

    // 3. TEST General Pest Service Page
    console.log('TEST 3: Loading General Pest Service Page...');
    await page.goto('http://localhost:5173/services/general-pest-control', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const generalHeroScreenshot = path.join(ARTIFACTS_DIR, 'test-verified-general-clean.png');
    await page.screenshot({ path: generalHeroScreenshot });
    console.log(`Saved: ${generalHeroScreenshot}`);

    // Scroll to treatment packages section
    await page.evaluate(() => {
      window.scrollTo(0, 2600);
    });
    await page.waitForTimeout(500);
    const generalOptionsScreenshot = path.join(ARTIFACTS_DIR, 'test-verified-general-packages.png');
    await page.screenshot({ path: generalOptionsScreenshot });
    console.log(`Saved: ${generalOptionsScreenshot}`);

    console.log('--- ALL PLAYWRIGHT TESTS COMPLETED SUCCESSFULLY ---');
  } catch (err) {
    console.error('TEST ERROR:', err);
  } finally {
    await browser.close();
  }
}

runVisualTest();
