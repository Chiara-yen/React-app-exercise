import React from 'react';

class Repos extends React.Component {

	render() {
		var repos = this.props.repos.map((repo, index) => {
			return (
				<li className="list-group-item" key={index}>
					{repo.html_url &&
						<h4><a href={repo.html_url}>{repo.name}</a></h4>
					}
					{repo.description &&
						<p>{repo.description}</p>
					}
				</li>
			);
		});

		return (
			<section>
				<h3>Repos</h3>
				<ul className="list-group">{repos}</ul>
			</section>
		);
	}
};

Repos.propTypes = {
	username: React.PropTypes.string.isRequired,
	repos: React.PropTypes.array.isRequired
};

export default Repos;