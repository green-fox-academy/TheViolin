const express = require('express');
const path = require('path');
const bp = require('body-parser');

const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  if (req.query.input) {
    res.send({
      "received": req.query.input,
      "result": req.query.input * 2
    })
  } else {
    res.send({
      "error": "Please provide an input!"
    })
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.send({
      "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    })
  } else if (req.query.name) {
    res.send({

      "error": "Please provide a title!"
    })
  }else {
    res.send({
      "error": "Please provide a name!"
    })
  }
});

app.get('/appenda/:appended', (req, res) => {
  if(!req.params.appended){
    res.send({
      "appended": "Please provide an input"
    })
  } 
});

app.use(bp());

app.post('/dountil/:action', (req, res) => {
  const{action}=req.params
  if(action=== 'sum'){
    res.json({
      "result": sum(req.body.until)
    });
  } else if(action === 'factor'){
    res.json({
      "result": factor(req.body.until)
    });
  } else {
    res.json({
      "error": "Please provide a number!"
    })
  }
})

let sum = (number) =>{
  let sums = 0;
  for (let i = number; i >= 0; i--){
    sums += number;
    number --;
  } return sums;
}

let factor = (number) =>{
  let factorNum = 1;
  for (let i = 1; i <= number; i++){
    factorNum *= i;
  } return factorNum;
}


app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});