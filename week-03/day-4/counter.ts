
export{ };

function counter(n: number): number {
  if (n <= 1) { 
    return 1;
  }
  else {
    return n - 1;
  }
}

console.log(counter(5));