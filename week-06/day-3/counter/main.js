const button = document.querySelector('button');
const items = document.querySelectorAll('li');
const list = Array.from(items);
const ps = document.querySelector('p');

console.log (ps)

const listItems = () => {
 console.log (ps.innerHTML = list.length)
  }

button.addEventListener('click', listItems);