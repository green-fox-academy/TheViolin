import { Instrument } from "./instrument";

abstract class StringedInstrument extends Instrument {

  constructor (name: string,protected numberOfStrings: number ){
   super (name);
   this.numberOfStrings = numberOfStrings;
  }
  abstract sound(): void;
  abstract play (): void;
}

export { StringedInstrument }