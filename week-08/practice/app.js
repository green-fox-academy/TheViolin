const express = require('express');
const app = express();
const path = require('path');
const PORT = 54000;

const mysql = require('mysql');

app.use(express.json());

const conn = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'alias_db',
  port: 3306,
});

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/links', (req, res) => {
  const { url, alias } = req.body;
  console.log(req.body);
  if (url === undefined || url === '' || alias === undefined || alias === '') {
    res.json({ message: 'All fields are required' });
  } else {
    const secretCode = Math.floor(1000 + Math.random() * 9000);
    conn.query('INSERT INTO aliases (url, alias, secretCode) VALUES (?,?,?);', [url, alias, secretCode], (err, data) => {
      if (err) {
        res.status(400).json({
          message: 'Alias already exists'
        });
      } else {
        res.json({
          url, alias, hitCount: 0, secretCode
        })
      }
    });
  }
});

app.get('/api/links', (req, res) => {
  conn.query('SELECT id, url, alias, hitCount FROM aliases;', (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});