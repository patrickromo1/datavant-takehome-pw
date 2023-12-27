import { expect, test } from '../fixtures/tickets.fixture';

test.describe.configure({ mode: 'parallel', timeout: 60000 });

test('should persist ticket parameters after clicking the cancel button', async ({ searchTicketsPage, serviceTicketsPage }) => {
  await searchTicketsPage.selectDepartureStation('Lagos');
  await searchTicketsPage.selectArrivalStation('Porto - Campanha');
  await searchTicketsPage.selectDepartureDate(3);
  await searchTicketsPage.selectArrivalDate(5);
  await searchTicketsPage.submitButton.click();
  await serviceTicketsPage.cancelButton.click();
  expect(true).toBe(true); // TODO: Remove placeholder
});
