'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

for (let i = 0; i <= canvas.width; i += 20){

  drawLine ([i, 0],[canvas.width, i], 'purple');
  drawLine ([0, i], [i, canvas.height], 'green');

}

function drawLine (from, to, color){

  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(from[0], from[1]);
  ctx.lineTo(to[0], to[1]);
  ctx.stroke();
  
}