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
		console.log("this.props.data.profilesData: ", this.props.data.profilesData);
		return(
			<aside>
				<img src={ githubLogo } alt={ this.props.data.displayName } title={ this.props.data.displayName } />
				<h3>{ this.props.data.displayName }</h3>
				<h4 className="caption">{ this.props.data.homeUser }</h4>
				<p className="caption">{ this.props.data.bio }</p>
				<p><img src={ location } alt={ location } title={ location } />{ this.props.data.homeLocation }</p>
				<p><img src={ github } alt={ github } title={ github } /><a href={ this.props.data.repoUrl } target="_blank">{ this.props.data.repoUrl }</a></p>
				<p><img src={ twitter } alt={ twitter } title={ twitter } /><a href={ this.props.data.twitterHandle } target="_blank">{ this.props.data.twitterHandle }</a></p>
				<ul>
					{
						this.props.data.profilesData && this.props.data.profilesData.items.length > 0 ? 
							this.props.data.profilesData.items.map((dataItem) => <li key={ dataItem.id }><img src={ dataItem.owner.avatar_url } alt={ dataItem.owner.login } title={ dataItem.owner.login } /></li>)
						: ('')
					}
				</ul>
			</aside>
		)
	}
}

export default Sidebar;