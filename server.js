
var path = require('path');
var express = require('express');
var moment = require('moment');

var myMoment = require('./public/js/momentModel.js');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/time', function (req, res) {
  var wesmelonsBirthday = new myMoment(2016, 11, 3);
  res.send('Hello! Wesmelon\'s birthday is ' + wesmelonsBirthday.getBirthday().format('MMMM Do YYYY, h:mm:ss a')
    + '. wesmelon\'s birthday is in ' + wesmelonsBirthday.tilBirthday() + '!');
});

app.listen(app.get('port'), function () {
  console.log('daytally listening on port 3000');
});
