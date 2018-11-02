let a: number = 1;
let b: number = 2;
let c: number = 3;

function printParams(a, b, c) {
    console.log(arguments[0]);
  
    console.log(arguments[1]);
  
    console.log(arguments[2]);
  }
  console.log (printParams(a, b, c));
  