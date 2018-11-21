import { StringedInstrument } from "./stringed";

  class BassGuitar extends StringedInstrument {

    constructor (numberOfStrings: number = 4,name: string = 'Bass Guitar' ){
      super (name, numberOfStrings);
      this.name = name;
      this.numberOfStrings = numberOfStrings;
    }
    sound(){
      return ('Duum-duum-duum');
    }
    play(){
      console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
  
    }
  }

  export {BassGuitar};