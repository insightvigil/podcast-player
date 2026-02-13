import http from 'http';
import app from './app.js';

const server = http.createServer(app);
const PORT = 3000;

async function startServer(){
  server.listen(PORT, () => {
    console.log('Hello World');
  })
};

startServer();