import { expect, test } from '../fixtures/tickets.fixture';

test.describe.configure({ mode: 'parallel', timeout: 90000 });

for (const language of ['en', 'pt']) {
  test.use({ language })
  test(`should persist ticket parameters after clicking the cancel button ${language}`, async ({ searchTicketsPage, serviceTicketsPage }) => {
    await searchTicketsPage.goto();
    await searchTicketsPage.selectDepartureStation('Lagos');
    await searchTicketsPage.selectArrivalStation('Porto - Campanha');
    await searchTicketsPage.selectDepartureDate(3);
    await searchTicketsPage.selectReturnDate(5);
    const initialInputValues = await searchTicketsPage.getTicketScheduleValues();
    await searchTicketsPage.submitButton.click();
    await serviceTicketsPage.cancelButton.click();
    await serviceTicketsPage.spinnerIcon.waitFor({ state: 'hidden' })
    await searchTicketsPage.chatBubble.waitFor({ state: 'visible' });
    const endInputValues = await searchTicketsPage.getTicketScheduleValues();
    expect.soft(initialInputValues.departureStation).toBe(endInputValues.departureStation);
    expect.soft(initialInputValues.departureDate).toBe(endInputValues.departureDate);
    expect.soft(initialInputValues.arrivalStation).toBe(endInputValues.arrivalStation);
    expect.soft(initialInputValues.returnDate).toBe(endInputValues.returnDate);
  });
}
