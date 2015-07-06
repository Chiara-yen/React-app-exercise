var React = require('react');

var Repos = React.createClass({

	propTypes: {
		username: React.PropTypes.string.isRequired,
		repos: React.PropTypes.array.isRequired
	},

	render: function() {
		return (
			<section>
				<h3>Repos</h3>
				<ul>
					<li>User Name: {this.props.username}</li>
					<li>{this.props.repos}</li>
				</ul>
			</section>
		);
	}

});

module.exports = Repos;