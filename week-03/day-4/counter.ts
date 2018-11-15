function counter(num: number): number {
  if (num <= 1) { 
    return 1;
  }
  else {
    return num + 1;
  }
}

console.log('67 + 1 = ', counter(67));