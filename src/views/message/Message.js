import React, { Component } from 'react';

class Message extends Component {
	render(){
		return (
			<h3 className="text-center">
				Message { this.props.params.id }
			</h3>
		)
	}
}

export default Message
