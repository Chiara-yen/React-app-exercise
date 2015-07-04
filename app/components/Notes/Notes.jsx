var React = require('react');

var Notes = React.createClass({

	render: function() {
		return (
			<section>
				<h3>Notes</h3>
				<ul>
					<li>{this.props.notes}</li>
				</ul>
			</section>
		);
	}

});

module.exports = Notes;