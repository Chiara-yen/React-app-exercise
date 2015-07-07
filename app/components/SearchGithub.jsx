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
			<section className="row" style={{width: '750px'}}>
				<form onSubmit={this.handlerSubmit}>
					<div className="col-xs-7">
						<input type="text" className="form-control" ref="userName" />
					</div>
					<div className="col-xs-5">
						<button type="submit" className="btn btn-block btn-primary">Search Github</button>
					</div>
				</form>
			</section>
		);
	}

});

module.exports = SearchGithub;