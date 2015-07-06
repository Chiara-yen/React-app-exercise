var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var SearchGithub = require('./SearchGithub');

var Main = React.createClass({

	render: function() {
		return (
			<section>
				<nav className="navbar navbar-default" role="navigation">
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