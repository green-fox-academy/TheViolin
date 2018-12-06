'use strict'

const container = document.querySelectorAll('p');
container.forEach(e => {
  console.log(e.innerText = 'goat rabbit <strong>cat</strong> dog');
});

const container = document.querySelectorAll('p');
container.forEach(e => {
  console.log(e.innerHTML = 'goat rabbit <strong>cat</strong> dog');
});

