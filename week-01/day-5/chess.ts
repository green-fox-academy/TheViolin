let lineCount : number = 8;
let symbol : string = "%";
let space : string = " ";

for (let j : number = 1; j<=lineCount; j++){
  if (j%2===1){
    console.log (symbol+space+symbol+space+symbol+space+symbol+space);
  }
  else{
    console.log (space+symbol+space+symbol+space+symbol+space+symbol);
  }
}
