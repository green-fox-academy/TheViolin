'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function center(x,y,widht,height){
  
  ctx.beginPath ();
  ctx.fillStyle = `purple`;
  ctx.fillRect (x,y,widht,height);

  ctx.fill();

}
for (let i=0; i<19; i++){
center(10+i*10, 10+i*10, 10, 10); 
}