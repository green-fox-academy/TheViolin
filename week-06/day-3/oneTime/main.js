const button = document.querySelector('button');
const timeStamp = Date.now();

const listItems = () => {
  console.log(timeStamp);
  button.setAttribute('disabled', true);
}

button.addEventListener('click', listItems);
