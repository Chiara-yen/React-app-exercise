var React = require('react');
var Router = require('react-router');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var UserProfile = require('./Github/UserProfile');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');

var Profile = React.createClass({

	mixins: [Router.State, ReactFireMixin],

	getInitialState: function() {
		return {
			notes: [],
			bio: {name: 'Chiara-yen'},
			repos: [1, 2, 3]
		};
	},

	componentDidMount: function() {
		console.log('componentDidMount');

		this.refs = new Firebase('https://github-note-taker.firebaseio.com');
		var childRef = this.refs.child(this.getParams().username);

		this.bindAsArray(childRef, 'notes');
	},

	componentWillUnmount: function() {
		this.unbind('notes');
	},

	handleAddedNote: function(newNote) {
		var childRef = this.refs.child(this.getParams().username);
		childRef.set(this.state.notes.concat([newNote]));
	},

	render: function() {
		var username = this.getParams().username;
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
						addNote={this.handleAddedNote}
					/>
				</div>
			</section>
		);
	}

});

module.exports = Profile;