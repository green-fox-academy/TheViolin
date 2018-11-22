class Apple {

  getApple(): string {
    return 'apple';
  }
}
let apple = new Apple;


import { test } from 'tape';

test('show the apple', t => {
  const actual = apple.getApple();
  const expected = 'cica';

  t.equal(actual, expected);
  t.end();
});