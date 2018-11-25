export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (fileContent) {
    console.log(fileContent.message);
    return null;
  }
}

function tictacResult(fileName: string): string {
  let fileContent: string[] = readFromFile(fileName).split('');
  let result: string = '';

  if (fileContent[0] === 'O' && fileContent[1] === 'X' && fileContent[2] === 'O') {
    result = 'O';
  }
  else if (fileContent[0] === 'X' && fileContent[1] === 'O' && fileContent[2] === 'O') {
    result = 'X';
  }
  else if (fileContent[0] === 'X' && fileContent[1] === 'O' && fileContent[2] === 'X') {
    result = 'Draw';
  }
  return result;
}
console.log(tictacResult("draw.txt"));