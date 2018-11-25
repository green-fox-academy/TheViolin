// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch(e) {
    console.log(`Unable to read file:${fileName}`);
    return null;
  }
}
function printEachLine(fromFile: string) {
  const myFile: string = readFromFile(fromFile);
  if (myFile !== null) {
    myFile.split('/r/n').forEach(elem => {
      console.log(elem);
    });
  }
}
printEachLine ('text1.txt');