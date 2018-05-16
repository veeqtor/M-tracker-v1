'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _requestsController = require('../controllers/requestsController');

var _requestsController2 = _interopRequireDefault(_requestsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _requestsController2.default.get_all_requests);

router.get('/:requestId', _requestsController2.default.get_a_request);

exports.default = router;
//# sourceMappingURL=requestRoute.js.map