
export{ };

function counter(n: number): number {
  if (n <= 1) { 
    return 0;
  }
  else {
    return counter (n - 1);
  }
}

console.log(counter(5));