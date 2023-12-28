import { test as setup, expect } from '../../fixtures/tickets.fixture';

const stateFile = 'playwright/.auth/cookie-consent.json';

setup('Persist state for cookie consent', async ({ searchTicketsPage, page }) => {
  await searchTicketsPage.goto();
  await searchTicketsPage.disableCookieAcceptButton.click();
  await expect(searchTicketsPage.disableCookieAcceptButton).toBeHidden();
  // Stores the cookies and local storage after accepting cookies to a json file.
  // These are injected in tests where this setup is configured as a
  // dependency in the playwright.config.ts
  await page.context().storageState({ path: stateFile });
});
