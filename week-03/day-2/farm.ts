import { Animal } from './animal';

// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

class Farm {
  name: string;
  listOfAnimals: Animal[];
  slots: number = 3;

  constructor(name: string) {
    this.listOfAnimals = [];
    this.name = name;
  }
  breed(animal: Animal) {
    if (this.slots > 0) {
      this.listOfAnimals.push(animal)
      this.slots--;
    } else {
      console.log(`No more place in the farm`);
    }
  }
  slaughter(farm: Farm): any {
    this.listOfAnimals.sort(function (a, b) {
      return b.hunger - a.hunger;
    })
    console.log(`remove this animal: ${this.listOfAnimals[0].name}`);
    this.listOfAnimals.shift();
  }
}

let animalList = new Farm("Farm");
animalList.breed(new Animal("kutya", 20, 60));
animalList.breed(new Animal("macska", 0, 40));
animalList.breed(new Animal("mókus", 30, 30));
animalList.breed(new Animal("kacsa", 20, 20));
animalList.breed(new Animal("róka", 10, 10));
animalList.breed(new Animal("ló", 50, 50));
animalList.breed(new Animal("szamár", 0, 0));



console.log(animalList);

animalList.slaughter(animalList);

console.log(animalList);


