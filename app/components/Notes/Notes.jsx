var React = require('react');

var NoteList = require('./NoteList');

var Notes = React.createClass({

	propTypes: {
		username: React.PropTypes.string.isRequired,
		notes: React.PropTypes.array.isRequired
	},

	render: function() {
		return (
			<section>
				<h3>Notes for {this.props.username}</h3>
				<NoteList notes={this.props.notes}/>
			</section>
		);
	}

});

module.exports = Notes;