import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

let listOfThings: Thing[] = [
    new Thing('Get milk'),
    new Thing('Remove the obstacles'),
    new Thing('Stand up'),
    new Thing('Eat lunch'),

]

for (let i = 0; i < listOfThings.length; i++) {
    fleet.add(listOfThings[i]);
    
    if (i >= 2) {
        listOfThings[i].complete();
    }
}

fleet.things.forEach(function (element) {
    if (element.completed) {
        console.log('[x]' + element.name);
    } else {
        console.log('[]' + element.name);
    }
})

for (let thing of listOfThings) {
  thing.printAllFields();
}