export { };                                                
const fs = require('fs');

function readFromFile(fileName: string): string {                
    try {
        return fs.readFileSync(fileName, 'utf-8');              
    } catch (e) {
        console.log(e.message);
        return null;
    }
}

function tictactoe(fileName: string): string{                      
  let fileContent: string[] = readFromFile(fileName).split('');          
  let result: string = '';                                       
  fileContent.forEach(function (e, i) {
    if (e[0]==='O' && e[1]==='X' && e[2]==='O'){
      result = 'O';
    }
    else if (e[0]==='X' && e[1]==='O' && e[2]==='O'){
      result = 'X';
    }
    else if (e[0]==='X' && e[1]==='O' && e[2]==='X'){
      result = 'Draw';
    } 
  }); return result;
}

console.log(tictactoe("win-o.txt"));