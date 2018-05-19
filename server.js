// Import http from node_modules
import http from 'http';

// Import the app to be served
import app from './app';

const port = process.env.PORT || 5000;

http.createServer(app)
  .listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
