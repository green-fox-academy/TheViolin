let abc: string[]=["Arthur", "Boe", "Chloe"];
let k: string= abc[0];

abc[0]=abc[2];
abc[2]=k;

console.log (abc);