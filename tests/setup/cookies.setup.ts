import { test as setup, expect } from '../../fixtures/tickets.fixture';

const stateFile = 'playwright/.auth/cookie-consent.json';

setup('Persist state for cookie consent', async ({ searchTicketsPage, page }) => {
  await searchTicketsPage.goto();
  await searchTicketsPage.disableCookieAcceptButton.click();
  await expect(searchTicketsPage.disableCookieAcceptButton).toBeHidden();
  await page.context().storageState({ path: stateFile });
});
