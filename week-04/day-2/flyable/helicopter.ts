import { Vehicle } from "./vehicle";
import { Flyable } from "./flyable";

class Helicopter extends Vehicle implements Flyable {

  constructor(color: string, wheelNumber: number, engine: string) {
    super(color, wheelNumber, engine)
  }
  land() {
    return 'successful Landing'
  }
  fly() {
    return 'successful Flying'
  }
  takeOff() {
    return 'take off was a success'

  }
}

export { Helicopter };
