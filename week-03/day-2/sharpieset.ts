import { Sharpie } from "./sharpie";
// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

class SharpieSet {

  listOfSharpie: Sharpie[];

  constructor() {
    this.listOfSharpie = [];
  }
  addSharpie(sharpie: Sharpie): void {
    this.listOfSharpie.push(sharpie);
  }
  countUsable(): number {
    let usable: number = 0;

    for (let i = 0; i < this.listOfSharpie.length; i++) {
      if (this.listOfSharpie[i].inkAmount > 0) {
        usable++;
      }
    }
    return usable
  }
  removeTrash(): any{
    for (let i = 0; i < this.listOfSharpie.length; i++) {
      if (this.listOfSharpie[i].inkAmount === 0) { //if-nél feltételbe mindig 3 egyenlőség jel
        this.listOfSharpie.splice(i, 1);
      } 
    } return this.listOfSharpie
  }
}

let SharpieSt = new SharpieSet;
SharpieSt.addSharpie(new Sharpie('blue', 100, 0));
SharpieSt.addSharpie(new Sharpie('green', 100, 10));
SharpieSt.addSharpie(new Sharpie('yellow', 100, 20));
SharpieSt.addSharpie(new Sharpie('black', 100, 50));

console.log (SharpieSt.countUsable());
console.log (SharpieSt.removeTrash());


 // létre kell hozni egy új új sharpiesettet, hogy bele tudjam pusholna a sharpiekat (class)