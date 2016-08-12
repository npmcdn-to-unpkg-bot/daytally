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
};

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
});

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
});

var EventForm = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      year: 0,
      month: 0,
      day: 0,
      body: ''
    };
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleYearChange: function(e) {
    this.setState({year: e.target.value});
  },
  handleMonthChange: function(e) {
    this.setState({month: e.target.value});
  },
  handleDayChange: function(e) {
    this.setState({day: e.target.value});
  },
  handleBodyChange: function(e) {
    this.setState({body: e.target.value});
  },
  handleSubmit: function(e) {
    if(!this.state.name || !this.state.body) {
      return;
    }
    e.preventDefault();
    var eventModel = new EventModel(
      this.state.name.trim(),
      new MomentModel(+this.state.year, this.state.month-1, +this.state.day),
      this.state.body.trim()
    );
    this.props.onEventSubmit(eventModel);
    this.setState({
      name: '',
      year: 0,
      month: 0,
      day: 0,
      body: ''
    });
  },
  render: function() {
    return (
      <div>
        <h2>Add New Event</h2>
        <form className="eventForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            type="number"
            placeholder="Year"
            value={this.state.year}
            onChange={this.handleYearChange}
          />
          <input
            type="number"
            placeholder="Month"
            value={this.state.month}
            onChange={this.handleMonthChange}
          />
          <input
            type="number"
            placeholder="Day"
            value={this.state.day}
            onChange={this.handleDayChange}
          />
          <input
            type="text"
            placeholder="Body"
            value={this.state.body}
            onChange={this.handleBodyChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
});

var Upcoming = React.createClass({
  getInitialState: function() {
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

    return {events: events}
  },
  handleEventSubmit: function(event) {
    var events = this.state.events;
    var newEvents = events.concat([event]);
    this.setState({events: newEvents});
  },
  render: function() {
    return (
      <div className="upcoming">
        <h2>Upcoming</h2>
        <EventList events={this.state.events}>
        </EventList>
        <EventForm onEventSubmit={this.handleEventSubmit}>
        </EventForm>
      </div>
    )
  }
});

ReactDOM.render(
  <Upcoming></Upcoming>,
  document.getElementById('content')
);
