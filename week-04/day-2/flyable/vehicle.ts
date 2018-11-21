abstract class Vehicle {
  color: string;
  wheelNumber: number;
  engine: string;

  constructor(color: string, wheelNumber: number, engine: string) {
    this.color = color;
    this.wheelNumber = wheelNumber;
    this.engine = engine;
  }
}

export { Vehicle };