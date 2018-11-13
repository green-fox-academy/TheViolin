export { };

// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
  hunger: number;
  thirst: number;

  constructor (hunger: number = 50, thirst: number = 50){
    this.hunger = hunger;
    this.thirst = thirst;
  }
  canEat(): number {
    return this.hunger --;
  }
  canDrink(): number {
    return this.thirst --;
  }
  canPlay(): number {
    return this.hunger ++; this.thirst ++;
  }
}
  let lion= new Animal (20,40);
  let elephant= new Animal (10,10);

  if (lion.canPlay()){
    console.log (`Lion is ${lion.hunger} hungry and ${lion.thirst} thirsty`)
  }
