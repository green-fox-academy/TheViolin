const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

let text = setTimeout(() => {
  console.log(h1.innerHTML = '2 seconds ellapsed');
}, 2000);

btn.addEventListener('click', text);