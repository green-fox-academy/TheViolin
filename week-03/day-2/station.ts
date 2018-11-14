import { stat } from "fs";

export { };

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


class Car {
  gasAmount: number;
  capacity: number;

  constructor(gasAmount: number = 0, capacity: number = 100) {
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}

class Station {
  gasAmount: number;

  constructor(gasAmount: number) {
    this.gasAmount = gasAmount;
  }

  refill(car) {
    this.gasAmount= this.gasAmount-car.gasAmount;
    car.gasAmount++;
    return ('The remaining gas left at the station is '+this.gasAmount);
  }
}

let car = new Car(20, 100);
let station = new Station (200);

console.log (car);
console.log (station);
console.log (station.refill(car));

