'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _app = require('../../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = _supertest2.default.agent(_app2.default);

var Expect = _chai2.default.expect;

var data = [{
  id: 110,
  name: 'John doe',
  email: 'example@gmail.com',
  date: '2018-10-13',
  dept: 'Accounts',
  message: 'Lorem ipsum '
}, {
  id: 120,
  name: 'Jane doe',
  email: 'janedoe@gmail.com',
  date: '2014-1-25',
  dept: 'Engineering',
  message: 'Lorem ipsum Lorem ipsum Lorem'
}, {
  id: 130,
  name: 'Frank Moore',
  email: 'frankmoore@examplemail.me',
  date: '2011-8-1',
  dept: 'Logistics',
  message: 'Lorem ipsum Lorem ipsum Lorem ipsum '
}];

describe('API ENDPOINT', function () {
  describe('GET request( /request )', function () {
    it('Should get response as JSON and and array of objects ', function (done) {
      server.get('/api/v1/users/requests').end(function (err, res) {
        Expect(res.statusCode).to.equal(200);
        Expect(res).to.be.an('object');
      });
      return done();
    });
  });
});
//# sourceMappingURL=requestRoutes.test.js.map