import { type Locator, type Page } from '@playwright/test';
import { getFutureDate } from '../util/date-time';

export class SearchTicketsPage {
  readonly page: Page;
  readonly departureTextInput: Locator;
  readonly departureDateInput: Locator;
  readonly arrivalTextInput: Locator;
  readonly arrivalDateInput: Locator;
  readonly inFocusDate: Locator;
  readonly nextMonthIcon: Locator;
  readonly submitButton: Locator;

  constructor (page: Page) {
    this.page = page;
    this.departureTextInput = this.page.locator('[ng-model="depart"]');
    this.departureDateInput = this.page.locator('[ng-model="departDate"]');
    this.arrivalTextInput = this.page.locator('[ng-model="arrival"]');
    this.arrivalDateInput = this.page.locator('[ng-model="returnDate"]')
    this.inFocusDate = this.page.locator('[class*="picker__day--infocus"]')
    this.nextMonthIcon = this.page.getByRole('button', { name: 'Next month' });
    this.submitButton = this.page.getByRole('button', { name: 'Submit »' })
  }

  async selectDepartureStation (station: string): Promise<void> {
    await this.departureTextInput.pressSequentially(station);
    await this.page.getByRole('link', { name: station }).click();
  }

  async selectArrivalStation (station: string): Promise<void> {
    await this.arrivalTextInput.pressSequentially(station);
    await this.page.getByRole('link', { name: station }).click();
  }

  async selectDepartureDate (daysInAdvance: number = 0): Promise<void> {
    const { futureDay, sameMonth } = getFutureDate(daysInAdvance);
    await this.departureDateInput.click();
    if (!sameMonth) await this.nextMonthIcon.click();
    await this.page
      .getByRole('gridcell', { name: futureDay, exact: true, disabled: false })
      .and(this.inFocusDate)
      .click();
  }

  async selectArrivalDate (daysInAdvance: number = 0): Promise<void> {
    const { futureDay, sameMonth } = getFutureDate(daysInAdvance);
    await this.arrivalDateInput.click();
    if (!sameMonth) await this.nextMonthIcon.click();
    await this.page
      .getByRole('gridcell', { name: futureDay, exact: true, disabled: false })
      .and(this.inFocusDate)
      .click();
  }

  async goto (): Promise<void> {
    await this.page.goto('/');
  }
}
