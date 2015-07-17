import React from 'react';

class SearchGithub extends React.Component {
	handlerSubmit() {
		var router = this.context.router;
		var userNameRef = this.refs.userName.getDOMNode();
		var userName = userNameRef.value;
		userNameRef.value = '';
		userName && router.transitionTo('profile', {username: userName});
	}

	render() {
		return (
			<section className="row" style={{width: '750px'}}>
				<form onSubmit={this.handlerSubmit.bind(this)}>
					<div className="col-xs-7">
						<input type="text" className="form-control" ref="userName" />
					</div>
					<div className="col-xs-5">
						<button type="submit" className="btn btn-block btn-primary">Search Github</button>
					</div>
				</form>
			</section>
		)
	}
};

// ES5 // mixins:[Router.Navigation],
SearchGithub.contextTypes = {
	router: React.PropTypes.func.isRequired
};

export default SearchGithub;