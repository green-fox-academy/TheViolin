'use strict';

let vmi: string = 'dishwasher';
let example: string = 'In a dishwasher far far away';


// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

let newExample=example.replace(vmi,"galaxy");

console.log(newExample);
