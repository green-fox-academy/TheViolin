const h1 = document.querySelector('h1')

document.addEventListener('keyup', (event) => {
  const keyName = event.key;
  console.log(h1.innerHTML = 'Last pressed key code is: ' + keyName);
});