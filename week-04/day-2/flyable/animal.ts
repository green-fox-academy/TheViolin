abstract class Animal {

  constructor(protected name: string, protected age: number) {
    this.name = name;
    this.age = age;
  }
  abstract getName(): void;

  abstract breed(): void;
}

export { Animal };
