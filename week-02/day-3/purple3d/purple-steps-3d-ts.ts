
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

let k=0;
for (let i=0; i<6; i++){
  center(k,k,i*15,i*15);
  k+=i*15;
  }

function center(x,y,widht,height){

  
  ctx.beginPath ();
  ctx.fillStyle = `purple`;
  ctx.strokeStyle = 'black';
  ctx.fillRect (x,y,widht,height)
  ctx.strokeRect (x,y,widht,height);
  

  ctx.fill();
  ctx.stroke();
}
