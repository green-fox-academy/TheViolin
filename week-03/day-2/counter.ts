// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
  integer: number;

  constructor(integer: number = 0) {
    this.integer = integer;
  }
  canAdd(): number {
    return this.integer++;
  }
  canGet(): string {
    return this.integer.toString();
  }
  canReset(): number {
    return this.integer= 0;
  }
}
let newNumber = new Counter(100);
if (newNumber.canAdd()) {
  console.log(`The New Number is ${newNumber.integer}, the old one is  ${newNumber.canReset()}`);
}
