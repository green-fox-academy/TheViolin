'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let newList: number []= [4,8,12,16];


function arrayContainsAnotherArray(listOfNumbers, newList){
  for(var i = 0; i < newList.length; i++){
    if(listOfNumbers.indexOf(newList[i]) === -1)
       return false;
  }
  return true;
}
console.log (arrayContainsAnotherArray(listOfNumbers,newList));