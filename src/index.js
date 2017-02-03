import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, /*useRouterHistory,*/ browserHistory, Redirect } from 'react-router'
// import { createHistory } from 'history';
import { createStore } from 'redux'
import todoApp from './redux/reducer'
import { addTodo } from './redux/action'

import Index from './views/index/Index';
import Inside from './views/inside/Inside';
import Message from './views/message/Message';

import leaveInside from './utils/leaveInside';

import './index.css';

// 推荐使用browserHistory，但也可使用history
// const history = useRouterHistory(createHistory)({ basename: '' })

let store = createStore(todoApp)

/*******************************************************************/

// 打印初始状态
console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// 发起一系列 action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))

// 停止监听 state 更新
unsubscribe();

/*******************************************************************/

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
