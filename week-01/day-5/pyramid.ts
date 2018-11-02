let lineCount : number = 4;
let star : string = "*";
let space : string = " ";
let decrease : number = lineCount;

for (let j : number = 0; j<lineCount; j++){
    if (j < lineCount){
        console.log (space.repeat (decrease)+star);
        star += "**";
        decrease --;
    }
}
