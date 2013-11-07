var https = require('https');
var cheerio = require('cheerio');

https.get('https://www.google.com/', function(res) {
  var data = '';
  res.on('data', function(chunk) {
    data += chunk;
  });
  res.on('end', function() {
    var $ = cheerio.load(data);
    console.log($('title').text());
  });
});
