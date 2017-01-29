import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, /*useRouterHistory,*/ browserHistory, Redirect } from 'react-router'
// import { createHistory } from 'history';

import Index from './views/index/Index';
import Inside from './views/inside/Inside';
import Message from './views/message/Message';

import leaveInside from './utils/leaveInside';

import './index.css';

// 推荐使用browserHistory，但也可使用history
// const history = useRouterHistory(createHistory)({ basename: '' })

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
	<Router history={ browserHistory }>
		<Route path="/" component={ App }>
			<IndexRoute component={ Index } />
			<Route path="index" component={ Index } />
			<Route path="inside" component={ Inside } onLeave={ leaveInside }>
				<Route path="/message/:id" component={ Message } /> // 绝对路径/message/:id则无需加上/inside
				<Redirect from="message/:id" to="/message/:id" /> // 重定向
			</Route>
			<Route path="*" component={ Index } /> // Not found路由
		</Route>
	</Router>
	,
	document.getElementById('root')
);
