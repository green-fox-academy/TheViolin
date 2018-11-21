import { Animal } from "./animal";

class Mammal extends Animal {

  constructor(name: string, age: number = 10) {
    super(name, age);
  }
  getName() {
    return this.name;
  }
  breed() {
    return 'pushing miniature versions out.'
  }
}

export { Mammal };