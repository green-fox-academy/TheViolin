import { Printable } from "./interface";

class Thing implements Printable {
  private _name: string;
  private _completed = false;

  constructor(name: string){
      this._name = name;
  }
  public complete() {
      this._completed = true;
  }
  get name(){
      return this._name;
  }
  get completed(){
      return this._completed;
  }
  printAllFields (){
    console.log (this._name + ' ' +this._completed);
  }
}

export { Thing };