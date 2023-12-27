import { type Locator, type Page } from '@playwright/test';
import { getFutureDate } from '../util/date-time';

export class SearchTicketsPage {
  readonly page: Page;
  readonly departureTextInput: Locator;
  readonly departureDateInput: Locator;
  readonly arrivalTextInput: Locator;
  readonly returnDateInput: Locator;
  readonly inFocusDate: Locator;
  readonly nextMonthIcon: Locator;
  readonly submitButton: Locator;

  constructor (page: Page) {
    this.page = page;
    this.departureTextInput = this.page.locator('[ng-model="depart"]');
    this.departureDateInput = this.page.locator('[ng-model="departDate"]');
    this.arrivalTextInput = this.page.locator('[ng-model="arrival"]');
    this.returnDateInput = this.page.locator('[ng-model="returnDate"]');
    this.inFocusDate = this.page.locator('[class*="picker__day--infocus"]');
    this.nextMonthIcon = this.page.getByRole('button', { name: 'Next month' });
    this.submitButton = this.page.getByRole('button', { name: 'Submit »' });
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

  async selectReturnDate (daysInAdvance: number = 0): Promise<void> {
    const { futureDay, sameMonth } = getFutureDate(daysInAdvance);
    await this.returnDateInput.click();
    if (!sameMonth) await this.nextMonthIcon.click();
    await this.page
      .getByRole('gridcell', { name: futureDay, exact: true, disabled: false })
      .and(this.inFocusDate)
      .click();
  }

  async getInputValues (): Promise<{
    departureStation: string
    departureDate: string
    arrivalStation: string
    returnDate: string
  }> {
    const departureStation = await this.departureTextInput.inputValue();
    const departureDate = await this.departureDateInput.inputValue();
    const arrivalStation = await this.arrivalTextInput.inputValue();
    const returnDate = await this.returnDateInput.inputValue();

    return {
      departureStation,
      departureDate,
      arrivalStation,
      returnDate
    }
  }

  async goto (): Promise<void> {
    await this.page.goto('/passageiros/en/buy-tickets', {
      waitUntil: 'domcontentloaded'
    });
  }
}
