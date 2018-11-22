import { test } from 'tape';
import { Apple } from './apple';

let apple = new Apple;

test('show the apple', t => {
  const actual = apple.getApple();
  const expected = 'apple';

  t.equal(actual, expected);
  t.end();
});