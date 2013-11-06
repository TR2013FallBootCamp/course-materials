module.exports = function(req, res) {
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
};
