var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Main = React.createClass({

	render: function() {
		return (
			<section>
				<nav className="navbar navbar-default" role="navigation">
					<h1 className="text-center text-info">I'm MENU :D</h1>
				</nav>
				<div className="container">
					<RouteHandler />
				</div>
			</section>
		)
	}

});

module.exports = Main;