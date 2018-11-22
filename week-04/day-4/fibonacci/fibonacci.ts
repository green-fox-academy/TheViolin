function fibonacciIndex(n: number): number {
  if (n === 0 || n < 0 || n === undefined) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return (fibonacciIndex(n - 1) + fibonacciIndex(n - 2));
  }
}
export { fibonacciIndex };