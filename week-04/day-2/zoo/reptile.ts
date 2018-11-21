import { Animal } from "./animal";

class Reptile extends Animal {

  constructor(name: string, age: number = 12) {
    super(name, age);
  }
  getName() {
    return this.name;
  }
  breed() {
    return 'laying eggs.';
  }
}

export { Reptile };