'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import http from node_modules
var port = process.env.PORT || 5000;

// Import the app to be served


_http2.default.createServer(_app2.default).listen(port, function () {
  console.log('Server running on port: ' + port);
});
//# sourceMappingURL=server.js.map