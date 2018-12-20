'use strict'

require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

conn.connect(err => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Connected to database', '\n');
});

const getAllTitle = 'SELECT book_name FROM book_mast'

app.get('/', (request, response) => {
  conn.query(getAllTitle, (err, data) => {
    if (err) {
      response.status(500).send(err);
    }
    response.status(200).send(data);
  });
});

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));