import React from 'react';

class AddNote extends React.Component {

	handleSubmit() {
		var newNoteRef = this.refs.newNote.getDOMNode();
		var newNote = newNoteRef.value;
		newNoteRef.value = '';
		newNote && this.props.addNote(newNote);
	}

	render() {
		return (
			<section className="input-group">
				<input type="text" className="form-control" ref="newNote" placeholder="Add New Note"/>
				<span className="input-group-btn">
					<button className="btn btn-info" type="botton" onClick={this.handleSubmit.bind(this)}> Submit </button>
				</span>
			</section>
		)
	}
};

AddNote.propTypes = {
	username: React.PropTypes.string.isRequired,
	addNote: React.PropTypes.func.isRequired
};

export default AddNote;