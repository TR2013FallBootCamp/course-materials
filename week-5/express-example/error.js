var util = require('util');
var fs = require('fs');

function NotFound(msg) {
  this.name = 'NotFound';
  Error.call(this, msg);
  Error.captureStackTrace(this, arguments.callee);
}

util.inherits(NotFound, Error);

exports.catchAll = function(req, res) {
  throw new NotFound('Page not found.');
};

exports.middleware = function(err, req, res, next) {
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
};
