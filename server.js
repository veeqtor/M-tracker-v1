import http from 'http';

import app from './app';

const port = process.env.port || 5000;

http.createServer(app)
  .listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
