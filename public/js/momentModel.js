var moment = require('moment');

var now = moment();

var MomentModel = function (year, month, day) {
  this.year = year;
  this.month = month;
  this.day = day;

  this.birthday = moment([year, month, day]);
};

MomentModel.prototype.getBirthday = function () {
  return this.birthday;
};

MomentModel.prototype.tilBirthday = function () {
  return now.to(this.birthday);
};

module.exports = MomentModel;
