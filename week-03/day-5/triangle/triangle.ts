'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');



function draw(x: number, y: number, r: number, i:number): void {
    //Base
    ctx.beginPath();
    ctx.moveTo (x,y);
    ctx.lineTo (x+r/2,y+r);
    ctx.lineTo (x-r/2,y+r);
    ctx.lineTo (x,y);

    ctx.strokeStyle = 'black';
    ctx.stroke();

  if (i >1) {
    // Left
    draw(x/2, y/2, r/2, i-1);
    // Right
    draw(x+r/2,y/2, r/2, i-1);
    // Bottom
    draw(x,y+r, r/2, i-1);
  }
}
draw(200, 0, 200,3);