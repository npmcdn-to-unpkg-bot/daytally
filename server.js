
var path = require('path');
var express = require('express');
var moment = require('moment');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/time', function (req, res) {
  var now = moment();
  var wesmelonsBirthday = moment([2016, 11, 3]);
  res.send('Hello! Today is ' + now.format('MMMM Do YYYY, h:mm:ss a')
    + '. wesmelon\'s birthday is in ' + now.to(wesmelonsBirthday) + '!');
});

app.listen(3000, function () {
  console.log('daytally listening on port 3000');
});
