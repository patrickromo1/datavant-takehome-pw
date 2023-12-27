import { test as base } from '@playwright/test';
import { BuyTicketsPage } from '../pages/buy-tickets.page.ts';

// Declare the types of your fixtures.
interface BuyTicketFixture {
  buyTicketsPage: BuyTicketsPage
}

export const test = base.extend<BuyTicketFixture>({
  buyTicketsPage: async ({ page }, use) => {
    const buyTicketsPage = new BuyTicketsPage(page);
    await page.goto('/passageiros/en/buy-tickets', {
      waitUntil: 'domcontentloaded'
    });
    await use(buyTicketsPage);
  }
});

export { expect } from '@playwright/test';
