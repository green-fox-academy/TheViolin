const buttons = document.querySelector('nav')
const photo = document.querySelector('.img-inspector')
let xPos = 0;
let yPos = 0;
let photoSize = 200;

buttons.addEventListener('click', event => {
  let direction = event.target.dataset.direction;
  if (direction === 'in') {
    photoSize += 10;
    photo.style.backgroundSize = `${photoSize}%`;
  } else if (direction === 'out') {
    photoSize -= 10;
    photo.style.backgroundSize = `${photoSize}%`;
  } else if (direction === 'left'&& xPos > - 500) {
    xPos -= 10;
    photo.style.backgroundPosition = `${xPos}px ${yPos}px`;
  } else if (direction === 'right'&& xPos >= -500 && xPos < 0) {
    xPos += 10;
    photo.style.backgroundPosition = `${xPos}px ${yPos}px`;
  } else if (direction === 'up' && yPos >= -320 && yPos <0) {
    yPos += 10;
    photo.style.backgroundPosition = `${xPos}px ${yPos}px`;
  } else if (direction === 'down' && yPos> -320) {
    yPos -= 10;
    photo.style.backgroundPosition = `${xPos}px ${yPos}px`;
}
})
