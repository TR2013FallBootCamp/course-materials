

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain', 'Are-you-awesome': 'go to http://talentriot.com'});
  res.end('Hello Boot Camp\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
