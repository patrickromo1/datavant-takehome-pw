import moment from 'moment';

interface FutureDate {
  futureDay: string
  sameMonth: boolean
}

/**
 * Get the day of the month after adding daysInFuture and if it is in the same month.
 */
export const getFutureDate = (daysInFuture = 0): FutureDate => {
  const currentMonth = moment().month();
  const futureDate = moment().add(daysInFuture, 'days');
  const futureDay = futureDate.date().toString();
  const futureMonth = futureDate.month();
  const sameMonth = currentMonth === futureMonth;
  return {
    futureDay,
    sameMonth
  }
};
