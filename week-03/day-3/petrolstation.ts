// Create a Station and a Car classes
// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

class Station {

  gasAmount: number;

  constructor (gasAmount: number){
    this.gasAmount = gasAmount;
  }

  refill(car){
    return car.gasAmount++ && this.gasAmount -- }
}

class Car {

  gasAmount: number;
  capacity: number

  constructor (gasAmount: number = 0, capacity: number = 100){
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}

let audi = new Car (20, 100);
let mol = new Station (200);

console.log (mol);
console.log (audi);

mol.refill(audi);

console.log (mol);
console.log (audi);
