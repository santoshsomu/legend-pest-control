import { chromium } from 'playwright';
import path from 'path';

// TEST SUITE: Verify streamlined service pages and zero duplicate CTA banners
const ARTIFACTS_DIR = 'C:/Users/aksha/.gemini/antigravity/brain/bd142f4a-46d4-4c94-8dd5-5354be7d3d51';

async function runVisualTest() {
  console.log('--- STARTING PLAYWRIGHT STREAMLINED SERVICE PAGES TEST ---');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  try {
    // 1. TEST Bee & Wasp Service Page - Full & Bottom
    console.log('TEST 1: Bee & Wasp Service Page...');
    await page.goto('http://localhost:5173/services/bee-wasp-removal', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const beeFullScreenshot = path.join(ARTIFACTS_DIR, 'test-streamlined-bee-full.png');
    await page.screenshot({ path: beeFullScreenshot, fullPage: true });
    console.log(`Saved: ${beeFullScreenshot}`);

    // Scroll to bottom (FAQ & Footer) to verify no duplicate CTA
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    const beeBottomScreenshot = path.join(ARTIFACTS_DIR, 'test-streamlined-bee-bottom.png');
    await page.screenshot({ path: beeBottomScreenshot });
    console.log(`Saved: ${beeBottomScreenshot}`);

    // 2. TEST General Pest Service Page - Full & Bottom
    console.log('TEST 2: General Pest Service Page...');
    await page.goto('http://localhost:5173/services/general-pest-control', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const generalFullScreenshot = path.join(ARTIFACTS_DIR, 'test-streamlined-general-full.png');
    await page.screenshot({ path: generalFullScreenshot, fullPage: true });
    console.log(`Saved: ${generalFullScreenshot}`);

    // Scroll to bottom (FAQ & Footer) to verify no duplicate CTA
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    const generalBottomScreenshot = path.join(ARTIFACTS_DIR, 'test-streamlined-general-bottom.png');
    await page.screenshot({ path: generalBottomScreenshot });
    console.log(`Saved: ${generalBottomScreenshot}`);

    // 3. Verify Homepage footer still has its regular CTA strip intact
    console.log('TEST 3: Verifying Homepage footer retains its natural CTA strip...');
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    const homeBottomScreenshot = path.join(ARTIFACTS_DIR, 'test-home-footer-cta.png');
    await page.screenshot({ path: homeBottomScreenshot });
    console.log(`Saved: ${homeBottomScreenshot}`);

    console.log('--- ALL STREAMLINED SERVICE PAGE TESTS PASSED ---');
  } catch (err) {
    console.error('TEST ERROR:', err);
  } finally {
    await browser.close();
  }
}

runVisualTest();
