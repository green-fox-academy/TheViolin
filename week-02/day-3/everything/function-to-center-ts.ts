'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let xcen=0;
let ycen=0;

for (let i=0;i<120;i++){
  if (xcen<canvas.width){
    center (xcen,0);
    center (canvas.width-xcen,canvas.height)
    xcen+=20;

  }

  if (ycen<canvas.height){
    center (canvas.width,ycen)
    center (0,canvas.height-ycen)
    ycen+=20;

}
function center(x,y){
  
  ctx.beginPath ();
  ctx.moveTo (x,y);
  ctx.lineTo (300,200);

  ctx.strokeStyle = 'black';
  ctx.stroke();
}
}
