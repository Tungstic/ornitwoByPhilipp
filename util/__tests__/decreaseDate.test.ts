import { expect, test } from '@jest/globals';
import { decreaseDate } from '../../app/functions/changeDate';

test('decrease yesterday by one day', () => {
  const yesterdayAsString = '10.08.23';

  const result = decreaseDate(yesterdayAsString);
  // returns only the day WITH local timezone
  const onlyResultsDay = result.getDate();

  // prints yesterday WITH Greenwich timezone
  // console.log(result);

  expect(onlyResultsDay).toBe(9);
  expect(onlyResultsDay).not.toBe('9');

  const wrongDate = '03.08.23';

  const wrongDateDecreased = decreaseDate(wrongDate);
  expect(wrongDateDecreased.getDate()).toBe(8);
});
