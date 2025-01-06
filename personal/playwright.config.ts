// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        isMobile: false,
      },
    },
    {
      name: 'iPhone 12',
      use: {
        ...devices['iPhone 12'],
        isMobile: true,
      },
    },
  ],
});