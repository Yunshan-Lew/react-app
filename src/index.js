import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, useRouterHistory } from 'react-router'
import { createHistory } from 'history';

import Index from './views/index/Index';
import Inside from './views/inside/Inside';
import Message from './views/message/Message';

import './index.css';

const history = useRouterHistory(createHistory)({ basename: '' })

const App = React.createClass({
	render(){
		return (
			<div>
				<h1 className="text-center">Welcome to the app</h1>
				<ul className="nav">
					<li>
						<Link to="/index">Index</Link>
					</li>
					<li>
						<Link to="/inside">Inside</Link>
					</li>
					<li>
						<Link to="/inside/message/123">Message</Link>
					</li>
				</ul>
				{ this.props.children }
			</div>
		)
	}
});

ReactDOM.render(
	<Router history={ history }>
		<Route path="/" component={ App }>
			<IndexRoute component={ Index } />
			<Route path="index" component={ Index } />
			<Route path="inside" component={ Inside }>
				<Route path="message/:id" component={ Message } />
			</Route>
		</Route>
	</Router>
	,
	document.getElementById('root')
);
