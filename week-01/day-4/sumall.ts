// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai: number[]=[3,4,5,6,7].reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(ai);