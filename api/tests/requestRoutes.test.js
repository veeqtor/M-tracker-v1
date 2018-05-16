import chai from 'chai';

import superTest from 'supertest';

import app from '../../app';


const server = superTest.agent(app);

const Expect = chai.expect;

describe('API ENDPOINT', () => {
  describe('GET request( /request )', () => {
    it('Should get an array of objects ', (done) => {
      server
        .get('/api/v1/users/requests')
        .end((err, res) => {
          Expect(res.statusCode).to.equal(200);
          Expect(res).to.be.an('object');
          Expect(res.body.data).to.be.an('array');
        });
      return done();
    });

    it('Should get an object', (done) => {
      server
        .get('/api/v1/users/requests/110')
        .end((err, res) => {
          Expect(res.statusCode).to.equal(200);
          Expect(res).to.be.an('object');
        });
      return done();
    });

    it('Should get Not found', (done) => {
      server
        .get('/api/v1/users/requests/1100')
        .end((err, res) => {
          Expect(res.statusCode).to.equal(404);
        });
      return done();
    });
  });

  describe('POST request( /request )', () => {
    const data =  {
      id: '140',
      name: 'Janet May',
      email: 'janetMaye@yahoomail.com',
      date: '2011-11-21',
      dept: 'Engineering HQ',
      message: 'Lorem ipsum owjjfndfnmnxnfj Lorem ipsum Lorem',
    };

    const data2 =  {
      id: 140,
      name: 'Janet May',
      email: 'janetMaye@yahoomail.com',
      date: '2011-11-21',
      dept: 'Engineering HQ',
      message: 'Lorem ipsum owjjfndfnmnxnfj Lorem ipsum Lorem',
    };

    it('Should get a status code 201', (done) => {
      server
        .post('/api/v1/users/requests')
        .send(data2)
        .end((err, res) => {
          Expect(res.statusCode).to.equal(201);
        });
      return done();
    });

    it('Should get a status code 400', (done) => {
      server
        .post('/api/v1/users/requests')
        .send(data)
        .end((err, res) => {
          Expect(res.statusCode).to.equal(400);
        });
      return done();
    });
  });
});
