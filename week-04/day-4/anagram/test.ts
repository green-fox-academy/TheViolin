import { test } from 'tape';
import { Words } from './anagram';

let words = new Words;

test('show the anagram', t => {
  const actual = words.anagram('láb','bál');
  const expected = true;

  t.equal(actual, expected);
  t.end();
});
