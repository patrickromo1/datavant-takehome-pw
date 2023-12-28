import { test as base } from '@playwright/test';
import { SearchTicketsPage } from '../pages/search-tickets.page';
import { ServiceTicketsPage } from '../pages/service-ticket.page';

export interface LanguageOptions {
  language: string
};

// Declare the types of your fixtures.
interface TicketFixture {
  searchTicketsPage: SearchTicketsPage
  serviceTicketsPage: ServiceTicketsPage
}

export const test = base.extend<LanguageOptions & TicketFixture>({
  language: ['en', { option: true }],

  searchTicketsPage: async ({ page, language }, use) => {
    const searchTicketsPage = new SearchTicketsPage(page, language);
    await use(searchTicketsPage);
  },
  serviceTicketsPage: async ({ page, language }, use) => {
    const serviceTicketsPage = new ServiceTicketsPage(page, language);
    await use(serviceTicketsPage);
  }
});

export { expect } from '@playwright/test';
