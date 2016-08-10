var express = require('express');
var moment = require('moment');
var app = express();

app.get('/', function (req, res) {
  var now = moment();
  var wesmelonsBirthday = moment([2016, 11, 3]);
  res.send('Hello! Today is ' + now.format('MMMM Do YYYY, h:mm:ss a')
    + '. wesmelon\'s birthday is in ' + now.to(wesmelonsBirthday) + '!');
});

app.listen(3000, function () {
  console.log('daytally listening on port 3000');
});
