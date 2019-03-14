import React, { Component } from 'react';
const css = require('../scss/style.scss');

import Header from './header.jsx';
import Sidebar from './sidebar.jsx';
import ProfileDetails from './profiles.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			homeUser: 'sachindra149',
			displayName: 'Sachindra',
			homeLocation: 'New Delhi, India',
			bio: 'UI Developer',
			repoUrl: 'https://github.com/sachindra149/github-battleground',
			twitterHandle: 'https://twitter.com/sachindra149',
			category: 'javascript',
			profilesData: ''
		}
	}
	componentDidMount() {
		fetch('https://api.github.com/search/repositories?q='+ this.state.category +'&sort=stars&order=desc')
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					profilesData: data
				})
			})
	}
	render() {
		return(
			<React.Fragment>
				<Header />
				<main role="main" className="mainContent">
					<Sidebar
						data={this.state}
					/>
					<ProfileDetails
						category={this.state.category}
						profilesData={this.state.profilesData}
					/>
				</main>
			</React.Fragment>
		)
	}
}

export default App;