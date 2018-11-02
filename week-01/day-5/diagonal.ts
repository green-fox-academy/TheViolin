let lineCount : number = 6;
let symbol : string = "%";
let space : string = " ";

for (let j : number = 1; j<=lineCount; j++){
    if (j<1){
        console.log (symbol.repeat(5));
    }
    else if (j>1 && j<=2){
        console.log (symbol.repeat (2)+space.repeat (2)+symbol);
    }
    else if (j>2 && j<=3){
        console.log (symbol+space+symbol+space+symbol);
    }
    else if (j>3 && j<=4){
        console.log (symbol+space.repeat(2)+symbol.repeat(2));
    }
    else if (j>4 && j<=5){
        console.log (symbol+space.repeat(3)+symbol);
    }
    else {
        console.log (symbol.repeat(5));
    }
}
