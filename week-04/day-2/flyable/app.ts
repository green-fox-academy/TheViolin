import { Helicopter } from "./helicopter";
import { Bird } from "./bird";

let eurocopter = new Helicopter('black', 3, 'turboshafts');
let donald = new Bird ('duck')

console.log("This " + eurocopter.takeOff())
console.log("Donald kacsa always says " + donald.land() + " and his wife always " + donald.breed()+" when she is pregnant.");