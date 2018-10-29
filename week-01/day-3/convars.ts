let a: number = 24;
let out: number = 0;

if (a%2 === 0){
    out++
}

console.log (out);

let b: number = 13;
let out2: string = '';

if (b>10 && b<20){

    out2 = "Sweet!";
}

if (b<10){

    out2 = "Less!";
}

if (b>20){

    out2 = "More!";

}

console.log(out2);

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if (credits>=50 && isBonus==false){

    c-=2;

}

else if (credits<50 && isBonus==false){

    c--;

}

else{

    c=c;
}

console.log(c);