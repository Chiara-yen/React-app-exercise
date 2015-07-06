var React = require('react');

var AddNote = React.createClass({

	propTypes: {
		username: React.PropTypes.string.isRequired,
		addNote: React.PropTypes.func.isRequired
	},

	handleSubmit: function() {
		var newNoteRef = this.refs.newNote.getDOMNode();
		var newNote = newNoteRef.value;
		newNoteRef.value = '';
		newNote && this.props.addNote(newNote);
	},

	render: function() {
		return (
		<section className="input-group">
			<input type="text" className="form-control" ref="newNote" placeholder="Add New Note"/>
			<span className="input-group-btn">
				<button className="btn btn-info" type="botton" onClick={this.handleSubmit}>Submit</button>
			</span>
		</section>
		);
	}

});

module.exports = AddNote;