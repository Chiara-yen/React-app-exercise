var React = require('react');

var UserProfile = React.createClass({

	propTypes: {
		username: React.PropTypes.string.isRequired,
		bio: React.PropTypes.object.isRequired
	},

	render: function() {
		return (
			<section>
				<h3>User Profile</h3>
				<ul>
					<li>User Name: {this.props.username}</li>
					<li>Bio: {this.props.bio}</li>
				</ul>
			</section>
		);
	}

});

module.exports = UserProfile;