var React = require('react');
var Router = require('react-router');

var SearchGithub = React.createClass({

	mixins:[Router.Navigation],

	handlerSubmit: function() {
		var userNameRef = this.refs.userName.getDOMNode();
		var userName = userNameRef.value;
		userNameRef.value = '';
		userName && this.transitionTo('profile', {username: userName});
	},

	render: function() {
		return (
			<section className="col-sm-12">
				<form onSubmit={this.handlerSubmit}>
					<div className="col-sm-7">
						<input type="text" className="form-control" ref="userName" />
					</div>
					<div className="col-sm-5">
						<button type="submit" className="btn btn-block btn-primary">Search Github</button>
					</div>
				</form>
			</section>
		);
	}

});

module.exports = SearchGithub;