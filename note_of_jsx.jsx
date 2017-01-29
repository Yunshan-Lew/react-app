// 属性改写：class => className，for => htmlFor

// 引入组件并挂载
import React from "react";
import { render } from "react-dom";
import fucker from "./components/fucker"

var the_fucker = <fucker></fucker>;
render(the_fucker, "#app");

// 使用JS表达式操作属性
var person = <person name={ window.isLoggedIn ? window.name : '' } />;

// 使用JS表达式操作组件
var content = <container>{ window.isLoggedIn ? <Nav/> : <Login/> }</container>;

// 属性扩散 对象展开设置成属性 属性相同以后出现的为准
var props = { foo: 'default' };
var component = <component { ...props } foo={ 'override' } />;

// style的用法
<pencil style={{ zIndex: 10 }} />

// props state 属性与状态，this.setState({ key: value })设置状态

// 让组件尽可能地少状态state

// 无状态组件，开销很低，如果可能的话尽量使用无状态组件

/********* 一般由单一函数构成 *********/

function HelloMessage(props){
	return (
		<div>
			Hello { props.name }
		</div>
	);
}

render(<HelloMessage name="John" />, "#app");

/************************************/

// 常用组件生命周期
componentWillMount(){
	
}

render(){
	
}

componentDidMount(){
	
}

componentWillUnmount(){
	
}

getInitialState(){ 
	// 初始化this.state的值，只在组件装载之前调用一次
}

// 阻止事件冒泡
e.stopPropagation();
e.nativeEvent.stopImmediatePropagation()

// 参数传递使用.bind(this, arg1, arg2, ...);

// 通过findDOMNode()方法拿到组件的DOM元素

// 通过ref和this.refs分别进行标记和引用

/*
	如果 ref 是设置在原生HTML元素上，拿到的就是DOM元素
	如果设置在自定义组件上，拿到的就是组件实例，这时候就需要通过findDOMNode来拿到组件的DOM元素
	不要在render或者render之前访问this.refs
*/

// this.props.children 父组件中获取子组件


/****************************** React Router ************************/

<Route path="/hello/:id">         	// 匹配 /hello/michael 和 /hello/ryan
<Route path="/hello(/:id)">     	// 匹配 /hello, /hello/michael 和 /hello/ryan
<Route path="/files/*.*">         	// 匹配 /files/hello.jpg 和 /files/path/to/hello.jpg

// 设置离开钩子
this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
