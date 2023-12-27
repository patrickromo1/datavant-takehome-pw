import { test, expect } from "../fixtures/tickets.fixture";

test.describe.configure({ mode: "parallel", timeout: 60000 });

test("", async ({ page, buyTicketsPage }) => {
  await buyTicketsPage.selectDepartureStation('Lagos');
  await buyTicketsPage.selectArrivalStation('Porto - Campanha');
  // await page.waitForTimeout(15000);

  // await page.goto('https://www.cp.pt/passageiros/en/buy-tickets');



  // await page.getByPlaceholder('From ').click();
  // await page.getByPlaceholder('From ').fill('lagos');
  // await page.getByRole('link', { name: 'Lagos' }).click();
  // await page.getByPlaceholder('To ').click();
  // await page.getByPlaceholder('To ').fill('porto');
  // await page.getByRole('link', { name: 'Porto - Campanha' }).click();
  // await page.getByPlaceholder('Date', { exact: true }).click();
  // await page.getByPlaceholder('Date', { exact: true }).click();
  // await page.getByRole('gridcell', { name: '30' }).nth(3).click();
  // await page.getByPlaceholder('Return date').click();
  // await page.getByRole('gridcell', { name: '1', exact: true }).nth(3).click();
  // await page.getByRole('button', { name: 'Submit »' }).click();
  // await page.getByRole('button', { name: 'X Cancel' }).click();
});
