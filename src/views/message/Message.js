import React, { Component } from 'react';

class Message extends Component {
	
	routerWillLeave(nextLocation) {
		const leave = confirm('确认要离开Message页面？')
		return leave
    }
	
	render(){
		return (
			<h3 className="text-center">
				Message { this.props.params.id }
			</h3>
		)
	}
	
	componentDidMount(){
		this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
	}
}

export default Message
