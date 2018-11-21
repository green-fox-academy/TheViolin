import { Animal } from "./animal";

class Bird extends Animal {

  constructor(name: string, age: number = 20) {
    super(name, age);
  }
  getName() {
    return this.name;
  }
  breed() {
    return 'laying eggs.';
  }
}

export { Bird };