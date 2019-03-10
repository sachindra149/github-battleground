import React, { Component } from 'react';
import githubLogo from '../images/logo-github.png';

import location from '../images/placeholder.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png';

class Sidebar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<aside>
				<img src={ githubLogo } />
				<h3>{ this.props.data.displayName }</h3>
				<h4 className="caption">{ this.props.data.homeUser }</h4>
				<p className="caption">{ this.props.data.bio }</p>
				<p><img src={ location } />{ this.props.data.homeLocation }</p>
				<p><img src={ github } /><a href={ this.props.data.repoUrl } target="_blank">{ this.props.data.repoUrl }</a></p>
				<p><img src={ twitter } /><a href={ this.props.data.twitterHandle } target="_blank">{ this.props.data.twitterHandle }</a></p>
				<ul>
					{
						this.props.data.profilesData && this.props.data.profilesData.length ? (
							<li>{  }</li>
						) : ('')
					}
				</ul>
			</aside>
		)
	}
}

export default Sidebar;