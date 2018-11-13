//Create a PostIt a class that has
//a backgroundColor
//a text on it
//a textColor
//Create a few example post-it objects:
//an orange with blue text: "Idea 1"
//a pink with black text: "Awesome"
//a yellow with green text: "Superb!"


class PostIt {
  backgroundColor: string;
  text: string;
  textcolor: string;

  constructor(backgroundColor:string, text:string, textcolor:string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textcolor = textcolor;
  }
}
let post = new PostIt('orange', 'Idea1', 'blue');
let post1 = new PostIt('pink', 'Awesome', 'black');
let post2 = new PostIt('yellow', 'Superb!', 'green');

console.log (post);
console.log (post1);
console.log (post2);