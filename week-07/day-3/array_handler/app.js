const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.json());

app.post('/arrays', (req, res) => {
  const{what,numbers}=req.body
  if(what=== 'sum'){
    res.json({
      "result": sum(numbers)
    });
  } else if(what === 'multiply'){
    res.json({
      "result": multiply(numbers)
    });
  } else if(what === 'double'){
    res.json({
      "result": double(numbers)
    });
  }
})
let sum = (numbers) =>{
  let sums = 0;
 numbers.forEach(element => {
   sums+=element;
 });return sums
};

let multiply = (numbers) =>{
  let result = 1;
  numbers.forEach(element =>{
    result*=element;
  });return result
}

let double = (numbers) =>{
  let doubled = []
  numbers.forEach(element => {
    doubled.push(element*2);
  });return doubled
}

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});