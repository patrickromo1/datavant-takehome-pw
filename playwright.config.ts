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
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL: 'https://www.cp.pt',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    testIdAttribute: 'ng-model' // Overwrites getByTestId locator strategy to leverage the ng-model attribute
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
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 14'],
        // Use prepared auth state.
        storageState: 'playwright/.auth/cookie-consent.json'
      },

      dependencies: ['setup']
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'], // Use prepared auth state.
        storageState: 'playwright/.auth/cookie-consent.json'
      },
      dependencies: ['setup']
    }
  ]
});
