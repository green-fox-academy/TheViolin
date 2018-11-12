// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideBy(a: 10, b: number): number {
  if (b === 0) {
    throw 'fail';
  }
  return a / b;
}

try {
  console.log(divideBy(10, 0));
} catch (e) {
  console.log(e);
}