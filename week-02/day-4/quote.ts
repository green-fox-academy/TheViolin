'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
// Expected output: "What I cannot create I do not understand."
let x= words[2];
let k= words[5];

function quoteSwap(words){
  words.splice (5,1,x)[0];
  words.splice (2,1,k)[0];
  return words.join (' ');
}

console.log (quoteSwap(words));