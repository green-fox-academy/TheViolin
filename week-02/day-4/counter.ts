'use strict';

const students: any[] = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9.5, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 }
];
// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function candypapa(students) {
  let a: any[] = students.map(obj => {
    let ob = {};
    ob[obj.name] = obj.candies;
    return ob;
  }
  )
  return a
}
console.log(candypapa(students));

function candymama(students) {
  let counter = 0;

  for (let i = 0; i < students.length; i++) {
    if (students[i]['candies'] < 5) {
      counter += students[i]['age']
    }
  }
  return counter;
}
console.log(candymama(students));