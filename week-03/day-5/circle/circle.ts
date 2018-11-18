'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawCircle(x: number, y: number, radius: number, i: number): void {
  //Base
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke();

  if (i > 1) {
    // Left
    draw(x - radius / 2.25, y + radius / 4.5, radius, i - 1);
    // Right
    draw(x + radius / 2.25, y + radius / 4.5, radius, i - 1);
    // Top
    draw(x, y - radius / 2, radius, i - 1);
  } else {
    return;
  }
}
drawCircle(200, 200, 200, 5);