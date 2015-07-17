import React from 'react';

import NoteList from './NoteList';
import AddNote from './AddNote';

class Notes extends React.Component {
	render() {
		return (
			<section>
				<h3>Notes for {this.props.username}</h3>
				<AddNote username={this.props.username} addNote={this.props.addNote} />
				<NoteList notes={this.props.notes}/>
			</section>
		);
	}
};

Notes.propTypes = {
	username: React.PropTypes.string.isRequired,
	notes: React.PropTypes.array.isRequired,
	addNote: React.PropTypes.func.isRequired
};

export default Notes;