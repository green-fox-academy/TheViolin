function counter(num: number): number {
  let n= 33;
  if (num <= 0) { 
    return n;
  }
  else {
    return n - num ;
  }
}

console.log( counter(22));