const request = require('supertest');
const app = require('../server');


describe('Hello', () => {
  test('succeeds with greetings', async (done) => {
    const res = await get('/api/hello')
      .expect(200);
    expect(res.body.greeting).toBe('hello API');
    done();
  });

});


describe("Timestamp", () => {
  test('return timestamp if valid', async (done) => {
    const res = await get('/api/timestamp/2016-11-20')
      .expect(200);
    expect(res.body.unix).toBe(1479600000000)
    done();
  })

  test('invalid date', async (done) => {
    const res = await get('/api/timestamp/2019-14-20')
      .expect(200);
    expect(res.body.error).toBe("Invalid Date")
    done();
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