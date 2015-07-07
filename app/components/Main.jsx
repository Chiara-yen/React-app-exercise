var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var SearchGithub = require('./SearchGithub');

var navStyle = {
	height: '50px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

var Main = React.createClass({

	render: function() {
		return (
			<section>
				<nav className="navbar navbar-default" role="navigation" style={navStyle}>
					<SearchGithub />
				</nav>
				<div className="container">
					<RouteHandler />
				</div>
			</section>
		)
	}

});

module.exports = Main;