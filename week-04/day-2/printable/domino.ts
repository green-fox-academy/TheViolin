import { Printable } from "./interface";

class Domino implements Printable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }
  printAllFields() {
    console.log(this.values);
  }
}
export { Domino };