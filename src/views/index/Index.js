import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './Index.css';

import { actress } from '../../reducers/reducer1';

class Index extends Component {
	
	constructor(props) {
		super(props);
		this.state = { 
			
		};
	}
	
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.<br/>
					Thanks for watching { actress.person }.avi
				</p>
				
			</div>
		);
	}
}

export default Index;
