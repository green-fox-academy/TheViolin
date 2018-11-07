'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.
for (var x = 0; x < 15; x++) for (var y = 0; y < 10; y++) {
  ctx.fillStyle = (x + y) % 2 ? 'white' : 'black';
  ctx.fillRect(40 * x, 40 * y, 40, 40)
}