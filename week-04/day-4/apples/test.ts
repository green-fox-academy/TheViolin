import { test } from 'tape';
import { getApple } from './apple';

test('show the apple', t => {
  const actual = getApple();
  const expected = 'apple';

  t.equal(actual, expected);
  t.end();
});