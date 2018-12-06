const animal = document.querySelector('img');
console.log('original image:', animal.getAttribute('src'));
animal.setAttribute('src', 'https://i.dailymail.co.uk/i/pix/2017/12/23/00/4786C01C00000578-5207567-image-a-41_1513990683213.jpg');

const ref = document.querySelector('a')
console.log('original link:', ref.getAttribute('href'));
ref.setAttribute('href', 'https://www.greenfoxacademy.com/');

const disableButton = document.querySelector('.this-one');
disableButton.disabled = true;
disableButton.innerText = "Don't click me";
console.log(disableButton);