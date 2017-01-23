import React, { Component } from 'react';

import styles from './Inside.css';

class Inside extends Component {
	render(){
		return (
			<div>
				<h2 className={ "text-center " + styles.inside }>Inside Page</h2>
				{ this.props.children }
			</div>
		)
	}
}

export default Inside
