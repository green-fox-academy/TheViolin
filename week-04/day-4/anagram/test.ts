import { test } from 'tape';
import { Words } from './anagram';

let words = new Words;

test('show the anagram with lower case letters', t => {
  const actual = words.anagram('láb','bál');
  const expected = true;

  t.equal(actual, expected);
  t.end();
});

test('show the anagram with lower upper case letters', t => {
  const actual = words.anagram('BAL','LBA');
  const expected = true;

  t.equal(actual, expected);
  t.end();
});

test('show the anagram with sentences', t => {
  const actual = words.anagram('áll a bál','láb a lál');
  const expected = true;

  t.equal(actual, expected);
  t.end();
});
