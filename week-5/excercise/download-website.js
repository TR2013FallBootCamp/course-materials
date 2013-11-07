var url = require('url');
var http = require('http');
var https = require('https');
var cheerio = require('cheerio');

var count = 0;

function downloadSite(siteUrl, callback) {
    var request;

    if (url.parse(siteUrl).protocol === 'https:') {
      request = https;
    } else {
      request = http;
    }
    request.get(siteUrl, function(res) {
      var data = '';
      res.on('data', function(chunk) {
        data += chunk;
      });
      res.on('end', function() {
        count++;
        callback(null, data);
      });
    }).on('error', function(err) {
      callback(err);
    });
  }

exports.download = downloadSite;


exports.parseTitle = function (err, data) {
    var $ = cheerio.load(data);
    var title = $('title').text();
    if (title !== '') {
      console.log('(' + count + ')The title for the website that was retrieved is: ' + title);
    } else {
      console.log('The page doesn\'t have a title tag.');
    }
  }
