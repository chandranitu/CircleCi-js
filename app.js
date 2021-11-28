const http = require('http');

http.createServer(function (req, res) {
  res.write('Hello Welcome to CI -CD pipeline!');
  res.end();
}).listen(8080, '0.0.0.0');
