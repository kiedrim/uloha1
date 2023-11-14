const request = require('supertest');
const app = require('../app');

describe('GET /count', () => {

  it('returns and 200 status code', async () => {
    const response = await request(app).get('/count');
    expect(response.statusCode).toBe(200);
  });

});

