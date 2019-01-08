const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('TESTING GET / ENDPOINT WITHOUT QUERY', (t) => {
  request(app)
    .get('/groot')
    .expect(210)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, { message: 'error: I am Groot' }, 'Status is NOT OK');
      t.end();
    });
});

test('TESTING GET / ENDPOINT WITH QUERY', (t) => {
  request(app)
    .get('/groot?message=somemessage')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {
        'received': 'somemessage',
        'translated': 'I am Groot'
      }, 'Status is OK');
      t.end();
    });
});