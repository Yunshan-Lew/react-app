// ���Ը�д��class => className��for => htmlFor

// �������������
import React from "react";
import { render } from "react-dom";
import fucker from "./components/fucker"

var the_fucker = <fucker></fucker>;
render(the_fucker, "#app");

// ʹ��JS���ʽ��������
var person = <person name={ window.isLoggedIn ? window.name : '' } />;

// ʹ��JS���ʽ�������
var content = <container>{ window.isLoggedIn ? <Nav/> : <Login/> }</container>;

// ������ɢ ����չ�����ó����� ������ͬ�Ժ���ֵ�Ϊ׼
var props = { foo: 'default' };
var component = <component { ...props } foo={ 'override' } />;

// style���÷�
<pencil style={{ zIndex: 10 }} />

// props state ������״̬��this.setState({ key: value })����״̬

// ����������ܵ���״̬state

// ��״̬����������ܵͣ�������ܵĻ�����ʹ����״̬���

/********* һ���ɵ�һ�������� *********/

function HelloMessage(props){
	return (
		<div>
			Hello { props.name }
		</div>
	);
}

render(<HelloMessage name="John" />, "#app");

/************************************/

// ���������������
componentWillMount(){
	
}

render(){
	
}

componentDidMount(){
	
}

componentWillUnmount(){
	
}

getInitialState(){ 
	// ��ʼ��this.state��ֵ��ֻ�����װ��֮ǰ����һ��
}

// ��ֹ�¼�ð��
e.stopPropagation();
e.nativeEvent.stopImmediatePropagation()

// ��������ʹ��.bind(this, arg1, arg2, ...);

// ͨ��findDOMNode()�����õ������DOMԪ��

// ͨ��ref��this.refs�ֱ���б�Ǻ�����

/*
	��� ref ��������ԭ��HTMLԪ���ϣ��õ��ľ���DOMԪ��
	����������Զ�������ϣ��õ��ľ������ʵ������ʱ�����Ҫͨ��findDOMNode���õ������DOMԪ��
	��Ҫ��render����render֮ǰ����this.refs
*/

// this.props.children ������л�ȡ�����


/****************************** React Router ************************/

<Route path="/hello/:id">         	// ƥ�� /hello/michael �� /hello/ryan
<Route path="/hello(/:id)">     	// ƥ�� /hello, /hello/michael �� /hello/ryan
<Route path="/files/*.*">         	// ƥ�� /files/hello.jpg �� /files/path/to/hello.jpg

// �����뿪����
this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
