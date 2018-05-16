import chai from 'chai';

import superTest from 'supertest';

import app from '../../app';


const server = superTest.agent(app);

const Expect = chai.expect;

const data = [
  {
    id: 110,
    name: 'John doe',
    email: 'example@gmail.com',
    date: '2018-10-13',
    dept: 'Accounts',
    message: 'Lorem ipsum ',
  },

  {
    id: 120,
    name: 'Jane doe',
    email: 'janedoe@gmail.com',
    date: '2014-1-25',
    dept: 'Engineering',
    message: 'Lorem ipsum Lorem ipsum Lorem',
  },


  {
    id: 130,
    name: 'Frank Moore',
    email: 'frankmoore@examplemail.me',
    date: '2011-8-1',
    dept: 'Logistics',
    message: 'Lorem ipsum Lorem ipsum Lorem ipsum ',
  },
];

describe('API ENDPOINT', () => {
  describe('GET request( /request )', () => {
    it('Should get response as JSON and and array of objects ', (done) => {
      server
        .get('/api/v1/users/requests')
        .end((err, res) => {
          Expect(res.statusCode).to.equal(200);
          Expect(res).to.be.an('object');
          Expect(res.body).to.be.an('array');
        });
      return done();
    });
  });
});
