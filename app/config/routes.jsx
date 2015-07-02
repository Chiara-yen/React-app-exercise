var React        = require('react');
var Router       = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route        = Router.Route;

var Main = require('../components/Main');
var Home = require('../components/Home');

module.exports = (
	<Route name="app" path="/" handler={Main}>

		<DefaultRoute handler={Home} />

	</Route>
);