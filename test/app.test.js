const request = require('supertest');
const app = require('../app');

describe('Time Route', () => {
  it('should return the time on /time ', () => {
    return request(app)
      .get('/time')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            time: expect.any(String),
          })
        );
      });
  });

  it('should return the amount og hours. minutes, seconds based on seconds alone', () => {
    return request(app)
      .post('/time')
      .send({
        time: 7201,
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            convertedTime: '2:Hour 0:Minute 1:Second',
          })
        );
      });
  });
});

describe('Date route', () => {
  it('should return a given  date on /date', () => {
    return request(app)
      .get('/date')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            date: expect.any(String),
          })
        );
      });
  });
});
