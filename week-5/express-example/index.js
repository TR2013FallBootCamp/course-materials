
var express = require('express');
var app = express();

var error = require('./error');
var contactForm = require('./contact-form');

app.configure(function() {
  app.use(express.logger('dev'));
  app.use(express.static(__dirname + '/public'));
  app.use(express.urlencoded());
  app.use(express.json());
  app.use(app.router);
  app.use(error.middleware);
});

app.post('/post', contactForm);

app.get('/*', error.catchAll);

app.listen(3000);
console.log("Express server listening on port %d", 3000);
