import React, { Component } from 'react';
import githubLogo from '../images/logo-github.png';

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			homeUser: ''
		}
	}

	componentDidMount() {
	
		fetch('https://api.github.com/users/'+ this.props.parentUser)
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					homeUser: data
				})
			})
			.catch((error) => {
				console.error(error);
			})
	}

	render() {
		return(
			<aside>
				<img src={ githubLogo } />
				<p className="caption">{ this.state.homeUser.location }</p>
				<p>{ this.state.homeUser.bio }</p>
			</aside>
		)
	}
}

export default Sidebar;