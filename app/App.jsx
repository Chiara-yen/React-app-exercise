var React = require('react');
var Main = require('./components/Main.jsx');

var App = React.createClass({

	render: function() {
		return (
			<div>
				<Main />
			</div>
		);
	}

});

React.render(<App/> , document.getElementById('app'));