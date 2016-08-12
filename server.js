var path = require('path');
var express = require('express');
var moment = require('moment');

var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function () {
  console.log('daytally listening on port 3000');
});
