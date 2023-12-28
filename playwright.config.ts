/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : '25%',
  reporter: process.env.CI ? [['list'], ['github'], ['html']] : [['list'], ['html']],
  use: {
    baseURL: 'https://www.cp.pt',
    screenshot: process.env.CI ? 'on' : 'only-on-failure',
    video: process.env.CI ? 'on' : 'retain-on-failure',
    trace: process.env.CI ? 'on' : 'retain-on-failure'
  },
  /* Configure projects for major browsers */
  projects: [
    { name: 'setup', testMatch: /.*\.setup\.ts/ },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'], // Use prepared auth state.
        storageState: 'playwright/.auth/cookie-consent.json'
      },
      dependencies: ['setup']
    },
    {
      name: 'mobile-safari',
      use: {
        ...devices['iPhone 14'],
        // Use prepared auth state.
        storageState: 'playwright/.auth/cookie-consent.json'
      },

      dependencies: ['setup']
    },
    {
      name: 'desktop-safari',
      use: {
        ...devices['Desktop Safari'], // Use prepared auth state.
        storageState: 'playwright/.auth/cookie-consent.json'
      },
      dependencies: ['setup']
    }
  ]
});
