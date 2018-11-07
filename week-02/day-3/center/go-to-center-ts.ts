'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function center(x,y){
  
    ctx.beginPath ();
    ctx.moveTo (x,y);
    ctx.lineTo (300,200);

    ctx.strokeStyle = 'green';
    ctx.stroke();
    
  
}
for (let i=0; i<3; i++){
  center(100+i*40,100); 

}
