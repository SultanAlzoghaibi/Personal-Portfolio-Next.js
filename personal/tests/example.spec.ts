import { test, chromium } from '@playwright/test';

test('should render home page in desktop version', async () => {
  // Launch the browser in non-headless mode (so you can see it)
  const browser = await chromium.launch({ headless: false });

  // Set up a regular desktop context with a custom viewport size
  const context = await browser.newContext({
    viewport: { width: 1280, height: 1024 }, // Set to a regular desktop screen size
  });

  // Create a new page within that context
  const desktopPage = await context.newPage();

  // Go to the home page (make sure your Next.js app is running on localhost:3000)
  await desktopPage.goto('http://localhost:3000');

  // Wait for the pagawait mobilePage.goto('http://localhost:3000');
  const videoElement = await desktopPage.$('video');
  if (videoElement) {
    console.log('Video element is found!');
  } else {
    console.log('Video element is NOT found!');
  }
  // Keep the browser open to inspect the desktop version of the page
  await desktopPage.waitForTimeout(300000); // Keep open for 30 seconds for inspection

  // Close the browser after inspection
  await browser.close();
});