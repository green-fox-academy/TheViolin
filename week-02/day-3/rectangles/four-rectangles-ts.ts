'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function center(x,y,widht,height,color){
  
  ctx.beginPath ();
  ctx.strokeStyle = `rgb(${60+40*color},80,200)`;
  ctx.strokeRect (x,y,widht,height);

  
  ctx.stroke();
  

}
for (let i=0; i<4; i++){
center(100+i*80,100+i*40, 100+i*20, 100+i*20,i); 
}
