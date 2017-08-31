### React的核心思想认为UI只是把数据通过映射关系变换成另一种形式的数据。

### 属性改写：class => className，for => htmlFor

### 引入组件并挂载
```jsx
import React from "react"
import { render } from "react-dom"
import fucker from "./components/fucker"

const the_fucker = <fucker></fucker>
render(the_fucker, "#app")
```

### 使用JS表达式操作属性
```jsx
const person = <person name={ window.isLoggedIn ? window.name : '' } />
```

### 使用JS表达式操作组件
```jsx
const content = <container>{ window.isLoggedIn ? <Nav/> : <Login/> }</container>
```

### 属性扩散 对象展开设置成属性 属性相同以后出现的为准
```jsx
const props = { foo: 'default' }
const component = <component { ...props } foo={ 'override' } />
```

### style的用法
```jsx
<pencil style={{ zIndex: 10 }} />
```

### props state 属性与状态，this.setState({ key: value })设置状态

### 让组件尽可能地少改变state

### 无状态组件，开销很低，如果可能的话尽量使用无状态组件
```jsx
// 一般由单一函数构成

function HelloMessage(props){
	return (
		<div>
			Hello { props.name }
		</div>
	)
}

render(<HelloMessage name="John" />, "#app")
```

### 常用组件生命周期
```jsx
getInitialState(){ 
	// 初始化this.state的值，只在组件装载之前调用一次
}

componentWillMount(){
	
}

render(){
	
}

componentDidMount(){
	
}

// 这里调用更新状态是安全的
componentWillReceiveProps(nextProps){
	this.setState({ state1: nextProps.state1 })
}

// 必须返回boolean值
shouldComponentUpdate(nextProps, nextState) {
	return nextProps.id !== this.props.id
}

// 取消计时器、网络请求等
componentWillUnmount(){
	
}
```

### 阻止事件冒泡
```jsx
React 实现了一个“合成事件”层（synthetic event system）：

handleClick(param, e) {
    // 合成事件
	e.stopPropagation()
	// 原生事件
	e.nativeEvent.stopImmediatePropagation()
}
```

### 参数传递使用.bind(this, arg1, arg2, ...)

### 通过findDOMNode()方法拿到组件的DOM元素

```txt
通过ref和this.refs分别进行标记和引用：
如果 ref 是设置在原生HTML元素上，拿到的就是DOM元素
如果设置在自定义组件上，拿到的就是组件实例，这时候就需要通过findDOMNode来拿到组件的DOM元素
不要在render或者render之前访问this.refs
```

### this.props.children 父组件中获取子组件

### React Router
```jsx
<Route path="/hello/:id">         	// 匹配 /hello/michael 和 /hello/ryan
<Route path="/hello(/:id)">     	// 匹配 /hello, /hello/michael 和 /hello/ryan
<Route path="/files/*.*">         	// 匹配 /files/hello.jpg 和 /files/path/to/hello.jpg

// 设置离开钩子
this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)

routerWillLeave(nextLocation){
	return true
}

// 跳转 push / replace
this.props.router.push({ pathname: '/user' query: { fuck: 'you'} })

// 路由实例参数对比
this.props.location ===  this.props.router.location  // true
this.props.params === this.props.router.params       // true
```