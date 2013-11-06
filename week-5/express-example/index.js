
var express = require('express');
var app = express();

app.use(express.logger('dev'));

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
  res.send('404: Page not found', 404);
});

app.listen(3000);
console.log('listening on port 3000');
