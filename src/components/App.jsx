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
			category: 'javascript'
		}
	}
	render() {
		return(
			<React.Fragment>
				<Header />
				<main role="main" className="mainContent">
					<Sidebar
						parentUser={this.state.homeUser}
					/>
					<ProfileDetails
						category={this.state.category}
					/>
				</main>
			</React.Fragment>
		)
	}
}

export default App;