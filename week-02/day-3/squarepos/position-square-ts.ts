'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function center(x,y,widht,height){
  
  ctx.beginPath ();
  ctx.strokeStyle = 'dark green';
  ctx.strokeRect (x,y,widht,height);

  
  ctx.stroke();
  
}
for (let i=0; i<4; i++){
  if (i<2){
  center(200+i*50,200+i*50, 50, 50);
  }
  else if (i>=2 && i<3){
  center (250,200,50,50);

  }
  else if (i>=3 && i<4){
  center (200, 250,50,50);
  }
}