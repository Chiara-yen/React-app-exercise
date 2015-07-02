var React = require('react');
var Router = require('react-router');

var Profile = React.createClass({

	mixins: [Router.State],

	getInitialState: function() {
		return {
			note: [],
			bio: {},
			repo: []
		};
	},

	render: function() {
		var username = this.getParams().username;
		return (
			<section className="row">
				<div className="col-md-4">
					User Profile Component ----> {username}
				</div>
				<div className="col-md-4">
					Repo Component
				</div>
				<div className="col-md-4">
					Note Component
				</div>
			</section>
		);
	}

});

module.exports = Profile;