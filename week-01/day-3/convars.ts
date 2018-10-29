let a: number = 24;
let out: number = 0;

if (a % 2 === 0) {
    out++
}

console.log(out);

let b: number = 13;
let out2: string = '';

if (b > 10 && b < 20) {

    out2 = "Sweet!";
}

if (b < 10) {

    out2 = "Less!";
}

if (b > 20) {

    out2 = "More!";

}

console.log(out2);

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if (credits >= 50 && isBonus == false) {

    c -= 2;

}

else if (credits < 50 && isBonus == false) {

    c--;

}

else {

    c = c;
}

console.log(c);


let d: number = 8;
let time: number = 120;
let out3: string = '';

if (d / 4 == 0 && time >= 200) {
    out3 = "check";
}

if (time > 200) {
    out3 = "Time out";
} else {
    out3 = "Run Forest Run";
}

console.log(out3)