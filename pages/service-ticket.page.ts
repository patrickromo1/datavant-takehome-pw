import { type Locator, type Page } from '@playwright/test';

export class ServiceTicketsPage {
  readonly page: Page;
  readonly cancelButton: Locator;

  constructor (page: Page) {
    this.page = page;
    this.cancelButton = this.page.getByRole('button', { name: 'X Cancel' });
  }
}
