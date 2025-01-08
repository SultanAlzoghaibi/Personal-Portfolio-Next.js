import { test, expect, chromium } from '@playwright/test';

test('should render the Home page correctly', async ({ page }) => {
  // Launch the browser in non-headless mode
  const browser = await chromium.launch({ headless: false });  // This opens the browser window
  const context = await browser.newContext();  // Create a new browser context
  
  // Step 1: Visit the home page
  await page.goto('http://localhost:3000/');  // Open your local Next.js app

  // Step 2: Check if the Hero section is visible
  const heroSection = await page.locator('div.relative >> text=Hero');
  await expect(heroSection).toBeVisible();

  // Step 3: Check if the Grid section is visible
  const gridSection = await page.locator('div.container');
  await expect(gridSection).toBeVisible();

  // Step 4: Check if the FloatingNav is rendered with the Home link
  const floatingNavLink = await page.locator('text=Home');
  await expect(floatingNavLink).toBeVisible();
  
  // Optional: Check for additional content such as future elements
  const futureContent = await page.locator('text=Add more content here!');
  await expect(futureContent).toBeVisible();

  // Keep the browser open to inspect it
  await page.waitForTimeout(10000); // Wait for 10 seconds (adjust as needed)

  // Close the browser
  await browser.close();
});