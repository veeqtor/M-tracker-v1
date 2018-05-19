'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _requestRoute = require('./api/routes/requestRoute');

var _requestRoute2 = _interopRequireDefault(_requestRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

app.use(_bodyParser2.default.urlencoded());

app.set('view engine', 'ejs');

app.use(_express2.default.static(_path2.default.join(__dirname, './UI')));

app.use('/api/v1/users/requests', _requestRoute2.default);

app.get('/', function (req, res) {
  res.render('index');
});

exports.default = app;
//# sourceMappingURL=app.js.map