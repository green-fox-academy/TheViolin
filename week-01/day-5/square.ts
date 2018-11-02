let lineCount : number = 6;
let symbol : string = "%";
let space : string = " ";
let decrease : number = lineCount;

for (let j : number = 1; j<=lineCount; j++){
    if (j < 2){
        console.log (symbol.repeat(6));
    }
    else if (j>1 && j<lineCount){
    console.log (symbol+space.repeat (4)+symbol);
    }
    else if (j=lineCount){
      console.log (symbol.repeat(6));
    }
  }
