const request = require('supertest');
const app = require('../app'); // Assuming your Express app is exported as 'app'

describe('GET /posts', () => {
  test('It should respond with status 200', async () => {
    const response = await request(app).get('/posts');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /posts/:id', () => {
  test('It should respond with status 200', async () => {
    const response = await request(app).get('/posts/65dcb8a392ec3a50a3ccf0b1');
    expect(response.statusCode).toBe(200);
  });
});



