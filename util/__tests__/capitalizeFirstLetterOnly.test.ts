import { expect, test } from '@jest/globals';
import { capitalizeFirstLetterOnly } from '../../app/functions/capitalizeFirstLetterOnly';

test('capitalize first letter in a string', () => {
  const testWord = 'burPIe';

  const result = capitalizeFirstLetterOnly(testWord);

  expect(result).toBe('Burpie');
});
