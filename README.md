### ES6的类，数据类型就是函数，类本身就指向构造函数
```js
class Point {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	toString() {
		return '(' + this.x + ', ' + this.y + ')'
	}
}
let p = new Point('fu', 'ck')
p.toString()
```

### Object.assign()方法可以很方便地一次向类添加多个方法
```js
Object.assign(Point.prototype, {
	toString(){
		
	},
	toValue(){
		
	}
})
```

### 一个类必须有constructor方法，constructor方法默认返回实例对象
```js
class Foo {
	constructor() {
		
	}
}
```

### 与ES5一样，类的所有实例共享一个原型对象
```js
const p1 = new Point(2,3)
const p2 = new Point(3,2)
p1.__proto__ === p2.__proto__  //true
```

### 与函数一样，类也可以使用表达式的形式定义
```js
const MyClass = class Me {
	getClassName() {
		return Me.name
	}
}
let inst = new MyClass()
```

### 采用Class表达式，可以写出立即执行的Class
```js
const person = new class {
	constructor(name){
		this.name = name
	}
	sayName(){
		console.log(this.name)
	}
}('Fuck You')

person.sayName()
```

### 利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值
```js
const bar = Symbol('bar')
const snaf = Symbol('snaf')

export default class myClass{

  // 公有方法
  foo(baz) {
    this[bar](baz)
  }

  // 私有方法
  [bar](baz) {
    return this[snaf] = baz
  }

}
```

### extends关键字实现继承
```js
class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y) // 调用父类的constructor(x, y)
		this.color = color
	}
	toString() {
		return this.color + ' ' + super.toString() // 调用父类的toString()
	}
}
```

### 子类必须在constructor方法中调用super方法，否则新建实例时会报错

### 子类没有自己的this对象，而是继承父类的this对象

### 子类的__proto__指向父类
```js
class A {

}
class B extends A {

}
B.__proto__ === A  // true
B.prototype.__proto__ === A.prototype  // true
```

### 通过super调用父类的方法时，super会绑定子类的this

### Class中的getter和setter
```js
class MyClass {
	constructor() {
		this.prop = "you"
	}
	get prop() {
		return this._prop
	}
	set prop(value) {
		this._prop = `The props is ${value}`
	}
}

let inst = new MyClass()
inst.prop = "me"
inst.prop
```

### 展开运算符
```js
arr1 = [1, 2]
arr2 = [3, 4]
arr1.push(...arr2) //等同于 Array.prototype.push.apply(arr1, arr2)

var str = 'love'
var arrStr = [...str] //['l', 'o', 'v', 'e']

let overrides = { ...a, x, y }
// 等同于
let overrides = Object.assign({}, a, { x: 1, y: 2 })
```

### rest运算符
```js
function bar(a, ...args) {
	console.log(a)
	console.log(args)
}
bar(1,2,3) //1 [2, 3]
```

### ... 放在被赋值 / 形参一方为rest运算符，放在赋值 / 实参一方为展开运算符

### rest参数之后不能再有其他参数，否则会报错
```js
function f(a, ...b, c) {
  
} //Error
```

### ES6模块输入的变量是活的，完全反应其所在模块lib.js内部的变化。
```js
// lib.js
let counter = 3
function incCounter() {
	counter++
}
export {counter, incCounter}

// main.js
import { counter, incCounter } from './lib.js'
console.log(counter) // 3
incCounter()
console.log(counter) // 4
```

```txt
	1. const命令只在声明所在的块级作用域内有效。
	2. const命令只是保证变量名指向的地址不变，并不保证该地址的数据不变。
```

```txt
	1. var命令和function命令声明的全局变量，依旧是顶层对象的属性。
	2. let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
```

### 反引号（`）和字符串插值 ${}：
```js
const first = 'Ass'
const last = 'Hole'
console.log(`Your name is ${first} ${last}.`)
```

```txt
	箭头函数：
	1. 函数体内的this对象，就是定义时所在的对象，而不是调用时所在的对象。
	2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
	3. 如果箭头函数直接返回一个对象，必须在对象外面加上括号。
```

```js
// 循环只遍历对象自身的和继承的可枚举的属性
for...in 

// 返回对象自身的所有可枚举的属性的键名
Object.keys(obj) 

// for...of语句遍历对象
for ( let key of Object.keys(someObject) ) {
	console.log(`${ key }: ${ someObject[key] }`)
}

// 检查数组
Array.isArray(arr)

// 过滤数组
let afterFilter = [1, 2, 3].filter(function(v){
	var result = v < 3 ? true : false
	return result
})

// 改变数组的每个元素
let afterMap = [1, 2, 3].map(function(){
	var result = v * 2
	return result
})

// 改变函数this的指向
fn.bind({})

// __proto__实现继承
function dad(){ }
function kid(){ }
kid.prototype.__proto__ = dad.prototype
```

### Generator函数
```js
/* Generator 函数是一个状态机，封装了多个内部状态。 */
/* Generator是分段执行的，yield语句是暂停执行的标记，next方法可以恢复执行。 */
/* 一个Generator函数，只有调用next方法时才会执行。 */

function* hwGenerator{
	yield 'hello'
	yield 'world'
	return 'ending'
}

let hw = hwGenerator()

hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
```

### async函数
```js
/*
	1. async函数返回一个Promise对象
	2. 执行时遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句
	3. async函数返回的是Promise对象，可以作为await命令的参数
*/

async function timeout(ms) {
	await new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}

async function asyncPrint(value) {
	await timeout(300)
	console.log(value)
}

asyncPrint('hello world')

/*
	4. await命令后面是一个Promise对象。如果不是，会被转成一个立即resolve的Promise对象
*/

async function f() {
	/*
	非异步resolve需要加上return
	return await new Promise( (resolve, reject) => {
		resolve(123)
	})
	*/
	return await 123
}

f().then( v => console.log(v) )

/*
	5. 只要一个await语句后面的Promise变为reject，那么整个async函数都会中断执行
*/

async function logInOrder(urls) {
	// 并发读取远程URL
	const textPromises = urls.map(async url => {
		const response = await fetch(url)
		return response.text()
	})
	// 按次序输出
	for (const textPromise of textPromises) {
		console.log(await textPromise)
	}
}

async function logInOrder(urls){
	// 并发读取远程URL
	const textPromises = urls.map(async url => {
		const response = await fetch(url)
		return response.text()
	})
	return textPromises
}

async function print(urls){
	let textPromises = await logInOrder(urls)
	// 按次序输出
	for (const textPromise of textPromises) {
		console.log(textPromise)
	}
}
```
