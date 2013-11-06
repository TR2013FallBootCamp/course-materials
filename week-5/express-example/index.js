
var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());
app.use(app.router);

function NotFound(msg) {
  this.name = 'NotFound';
  Error.call(this, msg);
  Error.captureStackTrace(this, arguments.callee);
}
NotFound.prototype.__proto__ = Error.prototype;



app.use(function(err, req, res, next) {
  if (err instanceof NotFound) {
    fs.readFile( __dirname + '/public/404.html', function (err, data) {
      if (err) {
        throw err;
      }
      res.send(data.toString());
    });
  } else {
    next();
  }
});

app.post('/post', function(req, res) {
  var firstname = req.body.firstname,
    lastname = req.body.lastname,
    age = req.body.age,
    city = req.body.city,
    state = req.body.state,
    email = req.body.email;
  res.send(
    'First name: ' + firstname + '<br />' +
    'Last name: ' + lastname + '<br />' +
    'Age: ' + age + '<br />' +
    'City: ' + city + '<br />' +
    'State: ' + state + '<br />' +
    'Email: ' + email
  );
});

app.get('/post', function(req, res) {
  res.send('I do what.')
})

app.get('/*', function(req, res) {
  throw new NotFound('Page not found.');
});

app.listen(3000);
console.log('listening on port 3000');
