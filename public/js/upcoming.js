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

var EventModel = function (name, momentModel, body) {
  this.name = name;
  this.momentModel = momentModel;
  this.body = body;
}

var Event = React.createClass({
  render: function() {
    return (
      <div className="event">
        <h2>{this.props.event.name}</h2>
        <p>{this.props.event.momentModel.tilBirthday()}</p>
        <p>{this.props.event.body}</p>
      </div>
    );
  }
})

var EventList = React.createClass({
  render: function() {
    var eventNodes = this.props.events.map(function(event, i) {
      return (
        <Event key={i} event={event}></Event>
      )
    });
    return (
      <div className="eventList">
        {eventNodes}
      </div>
    );
  }
})

var Upcoming = React.createClass({
  render: function() {
    return (
      <div className="upcoming">
        <h2>Upcoming</h2>
        <EventList events={this.props.events}>
        </EventList>
      </div>
    )
  }
})

var events = [
  new EventModel(
    'wesmelon\'s birthday',
    new MomentModel(2016, 10, 3),
    'celebrate his 23rd!'
  ),
  new EventModel(
    'sarahdew\'s birthday',
    new MomentModel(2016, 8, 14),
    'celebrate her 23rd!'
  )
];

ReactDOM.render(
  <Upcoming events={events}></Upcoming>,
  document.getElementById('content')
);
