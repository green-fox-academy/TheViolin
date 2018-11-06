'use strict';
export {};
let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(shopItems) {
  let newArray = [];
  for (let i = 0; i < shopItems.length; i++) {
    if (i === 1) {
      newArray.push('Croissant')
    }
    else if (i === 3) {
      newArray.push('Ice Cream')
    } else {
      newArray.push(shopItems[i]);
    }
  }
  return newArray;
}
console.log(sweets(shopItems));