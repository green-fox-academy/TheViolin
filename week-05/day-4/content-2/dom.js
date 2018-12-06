// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']
// 2) change the <ul> element's background color to 'limegreen'
//   - use css class to change the color instead of the style property

'use strict'

const fruits = ['apple', 'banana', 'cat', 'dog']
const container = document.querySelectorAll('li');
for (let i = 0; i < container.length; i++) {
  console.log(container[i].innerHTML = fruits[i])
};

