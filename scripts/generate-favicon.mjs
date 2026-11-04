import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function generateFavicon() {
  console.log('Generating pixel-perfect shield favicon from legend-official-logo.png...');
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const page = await browser.newPage({ viewport: { width: 400, height: 400 } });

  const logoPath = path.resolve('public/legend-official-logo.png');
  const logoBase64 = fs.readFileSync(logoPath).toString('base64');
  const dataUri = `data:image/png;base64,${logoBase64}`;

  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <body style="margin:0; background:transparent;">
        <canvas id="canvas" width="128" height="128"></canvas>
        <script>
          const img = new Image();
          img.onload = () => {
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            
            // The shield emblem in legend-official-logo.png is roughly the leftmost 28% of the width
            // Let's crop just the shield emblem
            const srcW = img.naturalWidth * 0.285;
            const srcH = img.naturalHeight;
            
            ctx.drawImage(img, 0, 0, srcW, srcH, 6, 6, 116, 116);
            window.__DONE = true;
          };
          img.src = "${dataUri}";
        </script>
      </body>
    </html>
  `);

  await page.waitForFunction(() => window.__DONE === true);

  const canvas = page.locator('#canvas');
  await canvas.screenshot({
    path: 'public/favicon.png',
    omitBackground: true,
  });

  await canvas.screenshot({
    path: 'public/favicon-shield.png',
    omitBackground: true,
  });

  // Also write favicon.ico (PNG bytes work as modern .ico or .png)
  fs.copyFileSync('public/favicon.png', 'public/favicon.ico');

  console.log('✓ Pixel-perfect shield favicon created at public/favicon.png and public/favicon.ico');
  await browser.close();
}

generateFavicon().catch(console.error);