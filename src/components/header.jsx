import React, { Component } from 'react';
import logo from '../images/logo1.png';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<header>
				<img src={ logo } />
			</header>
		)
	}
}

export default Header;