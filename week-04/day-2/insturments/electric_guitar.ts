import { StringedInstrument } from "./stringed";

class ElectricGuitar extends StringedInstrument {

  constructor (numberOfStrings: number = 6, name : string = 'Electric guitar'){
    super (name, numberOfStrings);
    this.name = name;
    this.numberOfStrings = numberOfStrings;
  }
  sound(){
    return ('Twang');
  }
  play(){
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
  }
}

export { ElectricGuitar }
    