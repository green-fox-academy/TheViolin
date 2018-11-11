"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

function envelopeStar(size, lineDistance, color) {

  for (let i = lineDistance; i < size; i += lineDistance) {

    ctx.beginPath();
    ctx.strokeStyle = color;

    ctx.moveTo(size, size - i);

    ctx.lineTo(size + (size - i), size);
    ctx.lineTo(size, size + i);
    ctx.lineTo(i, size)


    ctx.closePath();
    ctx.stroke();
  }
  return
}
envelopeStar(200, 10, 'limegreen');
