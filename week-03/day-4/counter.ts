
export{ };

function counter(n: number): number {
  if (n <= 0) { 
    return 0;
  }
  else {
    return n - 1;
  }
}

console.log(counter(5));