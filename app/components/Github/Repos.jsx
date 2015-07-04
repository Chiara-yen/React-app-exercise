var React = require('react');

var Repos = React.createClass({

	render: function() {
		return (
			<section>
				<h3>Repos</h3>
				<ul>
					<li>{this.props.repos}</li>
				</ul>
			</section>
		);
	}

});

module.exports = Repos;