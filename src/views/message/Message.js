import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, catchTodo } from '../../actions/action1';
import { actress } from '../../reducers/reducer1';

class Message extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			person: ''
		};
	}
	
	handleChange(e) {
		this.setState({ person: e.target.value });
	}
	
	routerWillLeave(nextLocation) {
		const leave = confirm('确认要离开Message页面？')
		return leave
    }
	
	catchHer(){
		let { dispatch } = this.props
		dispatch(catchTodo(this.state.person))
		this.setState({ person: actress.person })
	}
	
	fuckHer(){
		let { dispatch } = this.props
		dispatch(addTodo())
	}
	
	componentWillMount(){
		this.setState({ person: actress.person })
	}
	
	render(){
		return (
			<div>
				<h3 className="text-center">
					Message { this.props.params.id }
				</h3>
				<input type="text" value={ this.state.person } onChange={ this.handleChange.bind(this) } />
				<button onClick={ this.catchHer.bind(this) }>catch her</button>
				<br/>
				<br/>
				<button onClick={ this.fuckHer.bind(this) }>fuck her</button>
			</div>
		)
	}
	
	componentDidMount(){
		this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
	}
}

export default connect()(Message)
