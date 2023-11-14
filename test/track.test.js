const request = require('supertest');
const app = require('../app');

describe('POST /track', () => {

  it('returns 200 status code', async () => {

    const data = {
      user: '123', 
      count: "10"
    };

    const response = await request(app)
      .post('/track')
      .send(data);

    expect(response.statusCode).toEqual(200);

  });

});