import { type Locator, type Page } from '@playwright/test';

export class BuyTicketsPage {
  readonly page: Page;
  readonly departureTextfield: Locator;
  readonly arrivalTextfield: Locator;

  constructor (page: Page) {
    this.page = page;
    this.departureTextfield = this.page.locator('[ng-model="depart"]');
    this.arrivalTextfield = this.page.locator('[ng-model="arrival"]');
  }

  async selectDepartureStation (station: string): Promise<void> {
    await this.departureTextfield.pressSequentially(station);
    await this.page.getByRole('link', { name: station }).click();
  }

  async selectArrivalStation (station: string): Promise<void> {
    await this.arrivalTextfield.pressSequentially(station);
    await this.page.getByRole('link', { name: station }).click();
  }

  async goto (): Promise<void> {
    await this.page.goto('/');
  }
}
