import React from 'react';
import Rebase from 're-base';

import helper from '../utils/helper';
import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';

var base = Rebase.createClass('https://github-note-taker.firebaseio.com');

class Profile extends React.Component {

// ES5 // getInitialState
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			bio: {},
			repos: []
		};
	}

	init() {
		var username = this.router.getCurrentParams().username;

		this.ref = base.bindToState(username, {
			context: this,
			asArray: true,
			state: 'notes'
		});

		helper.getGithubInfo(username)
			.then((dataObj) => {
				console.log('dataObj : ', dataObj);
				this.setState({
					repos: dataObj.repos,
					bio: dataObj.bio
				});
			});
	}

	componentWillMount() {
		this.router = this.context.router;
	}

	componentDidMount() {
		this.init();
	}

	componentWillReceiveProps(nextProps) {
		base.removeBinding(this.ref);
		this.init();
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	handleAddedNote(newNote) {
		base.post(this.router.getCurrentParams().username, {
			data: this.state.notes.concat([newNote])
		});
	}

	render() {
		var username = this.router.getCurrentParams().username;
		return (
			<section className="row">
				<div className="col-md-4">
					<UserProfile username={username} bio={this.state.bio}/>
				</div>
				<div className="col-md-4">
					<Repos username={username} repos={this.state.repos}/>
				</div>
				<div className="col-md-4">
					<Notes
						username={username}
						notes={this.state.notes}
						addNote={this.handleAddedNote.bind(this)}
					/>
				</div>
			</section>
		);
	}
};

// ES5 // mixins: [Router.State, ReactFireMixin]
Profile.contextTypes = {
	router: React.PropTypes.func.isRequired
};

export default Profile;