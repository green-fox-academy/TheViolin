'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
function center(x,y,widht,height){
  
  ctx.beginPath ();
  ctx.strokeStyle = 'dark green';
  ctx.strokeRect (x,y,widht,height);

  
  ctx.stroke();
  
}
for (let i=0; i<3; i++){
center(275-(i*50/2),175-(i*50/2), 50+i*50, 50+i*50); 
}