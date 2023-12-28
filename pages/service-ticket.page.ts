import { type Locator, type Page } from '@playwright/test';

export class ServiceTicketsPage {
  readonly page: Page;
  readonly cancelButton: Locator;
  readonly spinnerIcon: Locator;

  constructor (page: Page, language = 'en') {
    this.page = page;
    this.cancelButton = this.page.getByRole('button', { name: 'X Cancel' });
    this.spinnerIcon = this.page.getByRole('img', { name: 'wait' });
  }
}
