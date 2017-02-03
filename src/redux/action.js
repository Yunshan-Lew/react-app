const ADD_TODO = 'ADD_TODO';

/*
 * 其它的常量
 */

const constant = {
	answer: "S-400"
}

/*
 * action 创建函数
 */
function addTodo(text) {
  return { type: ADD_TODO, text }
}

export { ADD_TODO, constant, addTodo }