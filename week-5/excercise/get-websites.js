var url = require('url');
var http = require('http');
var https = require('https');
var cheerio = require('cheerio');

function downloadWebsite(siteUrl, callback) {
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
      callback(data);
    });
  }).on('error', function() {
    callback(null);
  });
}

function getTitle(data) {
  var $ = cheerio.load(data);
  var title = $('title').text();
  if (title !== '') {
    console.log('The title for the website that was retrieved is: ' + title);
  } else {
    console.log('The page doesn\'t have a title tag.');
  }
}

console.log('Getting title for Google...');
downloadWebsite('https://www.google.com/', getTitle);

console.log('Getting title for TalentRiot...');
downloadWebsite('http://talentriot.com/', getTitle);

console.log('Getting title for GitHub...');
downloadWebsite('https://github.com/', getTitle);

console.log('Getting title for Boulder\'s site...');
downloadWebsite('https://bouldercolorado.gov/', getTitle);

console.log('Getting title for the Broncos site...');
downloadWebsite('http://www.denverbroncos.com/', getTitle);

console.log('Getting title for the Avalanche site...');
downloadWebsite('http://avalanche.nhl.com/', getTitle);

console.log('Getting title for Scrib\'s site...');
downloadWebsite('http://scrib.co/', getTitle);
