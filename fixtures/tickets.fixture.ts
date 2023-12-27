import { test as base } from '@playwright/test';
import { SearchTicketsPage } from '../pages/search-tickets.page';
import { ServiceTicketsPage } from '../pages/service-ticket.page';

// Declare the types of your fixtures.
interface TicketFixture {
  searchTicketsPage: SearchTicketsPage
  serviceTicketsPage: ServiceTicketsPage
}

export const test = base.extend<TicketFixture>({
  searchTicketsPage: async ({ page }, use) => {
    const searchTicketsPage = new SearchTicketsPage(page);
    await use(searchTicketsPage);
  },
  serviceTicketsPage: async ({ page }, use) => {
    const serviceTicketsPage = new ServiceTicketsPage(page);
    await use(serviceTicketsPage);
  }
});

export { expect } from '@playwright/test';
