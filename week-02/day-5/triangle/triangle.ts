"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

function lineplay(lineDistance) {
  for (let repLines = 0; repLines < canvas.width; repLines += lineDistance) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';

    ctx.moveTo(0+repLines/2, canvas.width-repLines);
    ctx.lineTo(canvas.width-repLines/2, canvas.width-repLines);
   
    ctx.stroke(); 


    ctx.beginPath();
    ctx.strokeStyle = 'black';

    ctx.moveTo(repLines, canvas.width);
    ctx.lineTo(canvas.width/2+repLines/2,repLines);
    
    ctx.stroke();
    
    
    ctx.beginPath();
    ctx.strokeStyle = 'black';

    ctx.moveTo(canvas.width-repLines, canvas.width);
    ctx.lineTo(canvas.width/2-repLines/2,repLines);
   
    ctx.stroke();
  }
}
lineplay(20);