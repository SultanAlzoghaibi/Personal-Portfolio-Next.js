import { test, devices, chromium } from '@playwright/test';

test('should render home page in mobile version only', async () => {
  // Launch the browser in non-headless mode (so you can see it)
  const browser = await chromium.launch({ headless: false });

  // Set up the mobile context for iPhone 12
  const context = await browser.newContext({
    ...devices['iPhone 12'],
  });

  // Create a new page within that context
  const mobilePage = await context.newPage();

  // Go to the home page (make sure your Next.js app is running on localhost:3000)
  await mobilePage.goto('http://localhost:3000');

  // Wait for the page to load and show content (you can wait for a specific element like 'h1')
  await mobilePage.waitForSelector('h1'); // Or any other element that confirms the page loaded

  // Keep the browser open to inspect the mobile version of the page
  await mobilePage.waitForTimeout(300000); // Keep open for 30 seconds for inspection

  // Close the browser after inspection
  await browser.close();
});