import moment from 'moment';

interface FutureDate {
  futureDay: string
  sameMonth: boolean
}

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
