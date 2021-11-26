const http = require('http');

http.createServer(function (req, res) {
  res.write('Hello chandra12345!');
  res.end();
}).listen(8080, '0.0.0.0');
