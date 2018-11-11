"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function lineplay(lineDistance) {
  for (let repLines = 0; repLines < canvas.width; repLines += lineDistance) {
    ctx.beginPath();
    ctx.strokeStyle = 'purple';

    ctx.moveTo(0+repLines, 0);
    ctx.lineTo(canvas.width, repLines);
   
    ctx.stroke(); 


    ctx.beginPath();
    ctx.strokeStyle = 'green';

    ctx.moveTo(canvas.width-repLines, canvas.width);
    ctx.lineTo(0, canvas.width-repLines);

    ctx.stroke(); 
  }
}
lineplay(20);