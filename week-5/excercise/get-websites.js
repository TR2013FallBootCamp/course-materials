var scrapeSite = require('./download-website');
var downloadWebsite = scrapeSite.download;
var getTitle = scrapeSite.parseTitle;

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
