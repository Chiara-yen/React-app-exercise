import React from 'react';
import {RouteHandler} from 'react-router';

import SearchGithub from './SearchGithub';

var navStyle = {
	height: '50px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

class Main extends React.Component {

	render() {
		console.log('Main Class props : ', this.props);
		return (
			<section>
				<nav className="navbar navbar-default" role="navigation" style={navStyle}>
					<SearchGithub />
				</nav>
				<div className="container">
					<RouteHandler {...this.props} />
				</div>
			</section>
		)
	}
};

export default Main;