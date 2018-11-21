import { Animal } from "./animal";
import { Flyable } from "./flyable";

class Bird extends Animal implements Flyable {

  constructor(name: string, age: number = 20) {
    super(name, age);
  }
  getName() {
    return this.name;
  }
  breed() {
    return 'laying eggs';
  }
  land() {
    return 'chipchip'
  }
  fly() {
    return 'chipchirip'
  }
  takeOff() {
    return 'chipchiripchirip'

  }
}

export { Bird };