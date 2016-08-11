var app = app || {};

(function () {
	'use strict';

  function render() {
    ReactDOM.render(
      <h1>Hello, wesmelon!</h1>,
      document.getElementById('content')
    );
  };

  render();
})();
