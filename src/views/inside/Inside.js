import React, { Component } from 'react';
import { browserHistory } from 'react-router'

import styles from './Inside.css';

class Inside extends Component {
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
	
	back(){
		// 组件外部跳转
		browserHistory.push('/index');
	}
	
	componentWillMount(){
		console.log('Welcome to ' + this.props.location.pathname);
	}
	
	render(){
		return (
			<div className="text-center">
				<button className={ styles.btn } onClick={ this.back.bind(this) }>Back to index</button>
				<h2 className={ styles.inside }>
					Inside Page
				</h2>
				{ this.props.children }
			</div>
		)
	}
	
	componentWillUnmount(){
		console.log('Good bye, ' + this.props.location.pathname)
	}
}

export default Inside
