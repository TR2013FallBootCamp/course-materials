var http = require('http');
var cheerio = require('cheerio');

http.get('http://talentriot.comm/', function(res) {
  var data = '';
  res.on('data', function(chunk) {
    data += chunk;
  });
  res.on('end', function() {
    var $ = cheerio.load(data);
    console.log($('title').text());
  });
});
