import { test } from 'tape';
import { List } from './sum';

let list = new List;


test('show the sum', t => {
  const actual = list.sum([1, 2, 3, 4]);
  const expected = 10;

  t.equal(actual, expected);
  t.end();
});