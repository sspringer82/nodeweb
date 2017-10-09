const http = require('http');

http
  .createServer((req, res) => {
    res.end('Hello World');
  })
  .listen(8080, function() {
    console.log('listening to http://localhost:8080');
  });
