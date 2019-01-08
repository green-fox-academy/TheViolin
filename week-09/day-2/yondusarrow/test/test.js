const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('TESTING GET / ENDPOINT WITHOUT QUERY', (t) => {
  request(app)
    .get('/yondu')
    .expect(210)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, { message: 'FAILED' }, 'Without Query');
      t.end();
    });
});

test('TESTING GET / ENDPOINT WITH QUERY', (t) => {
  request(app)
    .get('/yondu?distance=100.0&time=20.0')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {
        'distance': "100.0",
        'time': "20.0",
        'speed': 5
      }, 'With Query');
      t.end();
    });
});