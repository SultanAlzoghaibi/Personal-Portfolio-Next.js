const { chromium, devices } = require('playwright');

(async () => {
  // Launch Chromium browser
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Emulate a mobile device (e.g., iPhone 12)
  const iPhone = devices['iPhone 12'];
  await page.setViewportSize({
    width: iPhone.viewport.width,
    height: iPhone.viewport.height,
  });

  // Go to the local Next.js app
  await page.goto('http://localhost:3000');

  // Wait for the page to load (example: wait for an h1 element)
  await page.waitForSelector('h1');

  // Emulate dark mode
  await page.emulateMedia({ colorScheme: 'dark' });

  // Print the page title to console
  console.log('Page Title:', await page.title());

  // Optionally, wait to inspect the page manually
  await page.waitForTimeout(5000); // Keep the browser open for 5 seconds

  // Close the browser
  await browser.close();
})();