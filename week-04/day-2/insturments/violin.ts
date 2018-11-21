import { StringedInstrument } from "./stringed";

class Violin extends StringedInstrument {

  constructor (numberOfStrings: number = 4, name : string = 'Violin' ){
    super (name, numberOfStrings);
    this.name = name;
    this.numberOfStrings = numberOfStrings;
  }
  sound(){
    return ('Screech');
  }
  play(){
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
  }
}

export { Violin };