const request = require('supertest');
const app = require('../server');


describe('Hello', () => {
  it('succeeds with greetings', async () => {
    const res = await get('/api/hello')
      .expect(200);
    expect(res.body.greeting).toBe('hello API');
  });

});


describe("Timestamp", () => {
  it('return timestamp if valid', async () => {
    const res = await get('/api/timestamp/2016-11-20')
      .expect(200);
    expect(res.body.unix).toBe(1479600000000)
  })
});


// a helper function to make a GET request
function get(url) {
  const httpRequest = request(app).get(url);
  // httpRequest.send(body);
  httpRequest.set('Accept', 'application/json')
  httpRequest.set('Origin', 'http://localhost:57305')
  return httpRequest;
}