import { test } from 'tape';
import { counter } from './count';

test('count string', t => {
  const actual = counter('alak');
  const expected = { a: 2, l: 1, k: 1 };

  t.deepEqual(actual, expected);
  t.end();
});

test('count string', t => {
  const actual = counter('valami');
  const expected = { v: 1, a: 2, l: 1, m: 1, i: 1 };

  t.deepEqual(actual, expected);
  t.end();
});