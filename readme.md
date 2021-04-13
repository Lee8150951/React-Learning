

## 一、React入门

### 1、React是什么

React在整个业务中负责的是操作DOM呈现页面

用于构建用户界面的JavaScript库，值得注意的是React只注意界面构建

> 理解：React是一个将数据渲染成HTML视图的js库
>

### 2、React的特点

- 采用组件化模式、声明式编码，提高开发效率和组建的复用率

- 在React Native中可以使用React语法进行移动开发

- React使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互

### 3、Hello React

- 准备React容器

- 按顺序引入React文件

- 写入js文件

````html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 准备容器 -->
    <div id="test"></div>

    <!-- 引入react核心库 -->
    <script type="text/javascript" src="../assets/react-0.14.3/build/react.min.js"></script>
    <!-- 引入react-dom，用于操作dom -->
    <script type="text/javascript" src="../assets/react-0.14.3/build/react-dom.min.js"></script>
    <!-- 引入babel，用于将jsx转化为js，将ES6转化为ES5语法 -->
    <script type="text/javascript" src="../assets/react-0.14.3/build/babel.min.js"></script>

    <script type="text/babel">
        // 1、创建虚拟dom（千万不要加上引号）
        const VDOM = <h1>Hello, React!</h1>
        // 2、使用React渲染虚拟dom到界面
        ReactDOM.render(VDOM, document.getElementById('test'))
    </script>
</body>
</html>
````

**注意: 在`<script type="text/babel">`标签中不能写成`<script type="text/javascript">`或者`<script type="text/jsx">`**

- 引入React.js后全局加入一个对象 -- React
- 引入React-dom.js后全局加入一个对象 -- ReactDom

还有一种创建虚拟Dom的方式：

````javascript
// 1、创建虚拟dom
// React.createElement(标签名, 标签属性, 标签内容)
const VDOM = React.createElement('h1', {id: 'title'}, 'Hello React!')
// 2、使用React渲染虚拟dom到界面
ReactDOM.render(VDOM, document.getElementById('test'))
````

但是由于事实上的HTML界面存在标签层层嵌套的关系，上面这种方式会非常繁琐，所以很少使用这种方式

### 4、虚拟DOM和真实DOM

1）本质是Object类型的对象（一般对象）；

2）和真实DOM区别在于，虚拟DOM更加轻量；

3）虚拟DOM最终会被React转化为真实DOM，呈现在页面上

### 5、JSX语法规则

- 在定义虚拟DOM时，不要写引号

- 标签中混入JavaScript表达式时要用花括号`{ }`

````javascript
const myId = 'v_dom'
const myData = 'Hello React'
// 1、创建虚拟dom
const VDOM = (
    <h2>
        <div id={myId}>
            {myData}
        </div>
    </h2>
)
````

- 样式类名指定不要使用class，使用`className`

````javascript
<style>
    .title {
        color: red;
        font-size: 20px;
    }
</style>


const VDOM = (
    <h2>
    	<div className='title' id={myId}>
    		{myData}
		</div>
	</h2>
)
````

- 如果使用的是内联样式，使用`{{  }}`，另外如果是修改多个单词组成的属性如：font-size等属性时应该使用小驼峰的方式

````javascript
const VDOM = (
    <h2>
    	<div style={{color:'white', fontSize:'30px'}} id={myId}>
    		{myData}
		</div>
	</h2>
)
````

- 虚拟DOM必须只有一个根标签
- 所有标签必须闭合（包括自闭合）
- 标签首字母若为小写字母，会自动转为html标签，如果是大写会识别成一个组件

> js表达式和js语句的区别：
>
> 1、一个表达式会产生一个值，可以放在任何一个需要值的地方
>
> 2、语句指的不一定是产生的一个值，也有可能时if，case，for等代码块

````javascript
const js_list = ['Angular', 'React', 'Vue']
const VDOM = (
  <div>
    <h2>前端JS框架列表</h2>
    <ul>
      {
        js_list.map((item, index) => {
          return <li key={index}>{item}</li>
        })
      }
    </ul>
  </div>
)
ReactDOM.render(VDOM, document.getElementById('test'))
````

## 二、面向组件编程

### 1、函数式组件

> 什么是组件？
>
> 1）理解：用来实现局部功能效果的代码和资源的集合（html、css、js、image等等）
>
> 2）为什么要用组件：一个界面的功能更加复杂
>
> 3）复用编码，简化项目编码，提高运行效率

```javascript
// 1、创建函数式组件
function Demo() {
  return <h2>函数式组件</h2>
}
// 2、渲染组件到页面
ReactDOM.render(<Demo/>, document.getElementById('test'))
```

**注意：函数式组件针对的是较为简单的组件，不适用于大型组件**

另外，在上述代码中值得注意的有两点：

① 函数名和标签名必须是大写字母开头，不能小写！（如果是小写，浏览器会默认该标签属于html自带标签而发出警告并读取失败）

② 在ReactDOM.render()中，第一个参数引入的一定是一个**闭合**标签，而不是函数名

> 代码在执行了`ReactDOM.render(<Demo/>, document.getElementById('test'))`后发生的一系列步骤：
>
> 1、React解析组件标签，找到名为Demo的组件；
>
> 2、发现组件是由函数定义的，随后调用该函数，键返回的虚拟DOM转化为真实DOM并呈现在页面中。

### 2、JavaScript类的相关知识

新建类的关键字：`class`

创建实例对象关键字：`new`

```javascript
// 1、创建Person类
class Person {
  // 构造器方法
  constructor(name, age) {
    // 构造器中的this指的是类的实例对象
    this.name = name
    this.age = age
  }
  // 一般方法
  speak() {
    // 通过Person实例调用speak时，speak中的this就是Person实例 
    console.log(`name: ${this.name}, age: ${this.age}`)
  }
}
// 2、创建Person实例对象
const p1 = new Person('tom', 18)
p1.speak()
const p2 = new Person('jerry', 20)
p2.speak()
```

在JavaScript中没有类似Java中对于类属性的定义方法，也没有Getter和Setter方法，就是通过Constructor方法（构造器的方法）对其进行相关功能实现。

另外注意：在类中定义方法不要写function ***() { }来对方法进行构造，直接写方法名即可

**函数的继承**：

使用继承后该类已经继承了Person中所有的属性和方法

构造器如果没必要添加新词条时不需要进行重写的

但是如果一旦构造器需要进行修改就一定要使用super（超类）

 super()中的参数即使所继承类的所有构造器属性（避免了大量对已继承属性的复写）

```javascript
class Person {
    // 构造器方法
    constructor(name, age) {
        // 构造器中的this指的是类的实例对象
        this.name = name
        this.age = age
    }
    // 一般方法
    speak() {
        console.log(`name: ${this.name}, age: ${this.age}`)
    }
}
// 继承类对象
class Student extends Person {
    // 使用继承后该类已经继承了Person中所有的属性和方法
    // 构造器如果没必要添加新词条时不需要进行重写的
    // 但是如果一旦构造器需要进行修改就一定要使用super（超类）
    // super()中的参数即使所继承类的所有构造器属性（避免了大量对已继承属性的复写）
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }

    // 对原方法的重写
    speak() {
      console.log(`name: ${this.name}, age: ${this.age}, grade: ${this.grade}`)
    }
}
```

> 总结：
>
> 1、类中的构造器不是必须写的，要对实例进行一些实例化的操作，如添加指定属性才写；
>
> 2、如果A类继承了B类，且A类中写了构造器，那么A类构造器中的super必须要被调用；
>
> 3、类中所定义的方法都是放在类的原型对象上，供实例去使用。

### 3、类式组件

基本使用方式：

```javascript
// 1、创建类式组件
class Demo extends React.Component {
    render() {
        return (
            <h2>函数式组件</h2>
        )
    }
}
// 2、渲染
ReactDOM.render(<Demo/>, document.getElementById('test'))
```

> 代码在执行了`ReactDOM.render(<Demo/>, document.getElementById('test'))`后发生的一系列步骤：
>
> 1、React解析组件标签，找到名为Demo的组件；
>
> 2、发现组件是由类定义的，随后new该类的实例，并通过该实例调用到原型上的render方法；
>
> 3、将render返回的虚拟DOM转为真实DOM，随后呈现在页面中

### 4、组件的三大属性

在每一个React组件中都含有三个属性：state，props，refs

#### （1）state

> 基本使用：在组件使用state属性时应该在构建组件时加上一个构造器，这个构造器获取的是props值（注意：一定要使用super()对参数进行一个接收），然后再通过this.state的方式写入state需求的数据**（注意：通过对象的方式）**

```javascript
class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHot: false
        }
    }
    render() {
        console.log(this);
        return (
            <h2>天气{this.state.isHot ? '炎热' : '凉爽'}</h2>
		)
	}
}
```

**注意：状态不可以直接更改，要借助一个内置的API--> setState 去修改**

```javascript
class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHot: false
        }
        // bind的作用：生成新的函数；更改函数中的this
        this.changeWeather = this.changeWeather.bind(this)
    }
    render() {
        console.log(this)
        return (
            <h2 onClick={this.changeWeather}>天气{this.state.isHot ? '炎热' : '凉爽'}</h2>
        )
	}
    // 定义方法
    changeWeather() {
        const isHot = this.state.isHot
        // 状态的更新必须通过setState进行修改
        this.setState({
            isHot: !isHot
        })
    }
}
```

值得关注的是，通过setState方法更新只对指定元素进行修改，不影响其他state元素

总结：React类组件构造器的作用有两个

① 初始化数据状态；

② 解决this指向问题

```javascript
constructor(props) {
    super(props)
    this.state = {
        isHot: false,
        isWind: true
    }
    // bind的作用：生成新的函数；更改函数中的this
    this.changeWeather = this.changeWeather.bind(this)
}
```

**React对State的重构（标准写法）：**

```javascript
<script type="text/babel">
  // 1、常见类式组件
  class Weather extends React.Component {
    state = {
      isHot: false,
      isWind: true
    }
    render() {
      console.log(this)
      return (
        <h2 onClick={this.changeWeather}>
          天气{this.state.isHot ? '炎热' : '凉爽'}，
          {this.state.isWind ? '刮' : '不刮'}风
        </h2>
      )
    }
    // 定义方法
    // 箭头函数的this找的是其外层函数的this作为本箭头函数的this
    changeWeather = () => {
      const isHot = this.state.isHot
      const isWind = this.state.isWind
      this.setState({
        isHot: !isHot,
        isWind: !isWind
      })
    }
  }
  // 2、渲染
  ReactDOM.render(<Weather/>, document.getElementById('test'))
</script>
```

> state使用总结：
>
> 1、组件中render方法中的this为组件实例对象
>
> 2、组件自定义方法要使用赋值式的箭头函数
>
> 3、数据状态的更新要使用setState方法
>
> 4、state通过赋值的方式（不要挂载在构造器中），并通过对象键值对的方式赋值，不可以采用数组

#### （2）props

props和state的区别在于state更加倾向于组件内部的事情，而props则是组件外部通过方法传进来的值

**首先注意：props是只读的**

基本使用形式：

```javascript
class Person extends React.Component {
  render() {
    // 解构赋值
    const {name, sex, age} = this.props
    return (
      <ul>
        <li>Name: {name}</li>
        <li>Sex: {sex}</li>
        <li>Age: {age}</li>
      </ul>
    )
  }
}
ReactDOM.render(<Person name="tom" age="18" sex="male"/>, document.getElementById('test'))
```

可以理解成HTML标签中都是一个个键值对构成，React将这些键值对解析成了自带props对象中的键值对，构成了一个props

这种适用形式固然简单，但是也是一种将值写固定且信息非常少的情况

在应对项目时，可以将值写成一个对象，使用在ES6中的拓展语法`...`（三点运算符）在标签中直接引入即可

```javascript
class Person extends React.Component {
    render() {
        // 解构赋值
        const {name, sex, age} = this.props
        return (
            <ul>
            	<li>Name: {name}</li>
            	<li>Sex: {sex}</li>
            	<li>Age: {age}</li>
          	</ul>
        )
	}
}
// 模拟后台传来的数据
const p = {name: 'tom', age: '18', sex: 'male'}
ReactDOM.render(<Person {...p}/>, document.getElementById('test'))
```

**props数据限制：**

在React16之后，需要从外部引入prop-type.js对标签属性进行限制

```javascript
 <script type="text/babel">
    class Person extends React.Component {
      	render() {
        	// 解构赋值
        	const {name, sex, age} = this.props
        	return (
          	<ul>
            	<li>Name: {name}</li>
            	<li>Sex: {sex}</li>
            	<li>Age: {age}</li>
          	</ul>
        	)
      	}
    }
    // 属性规则制定
    // 在React16后无法直接使用React.PropTypes进行使用，需要单独引入prop-type.js进行使用
    // 但是由于下不到这个js文件，下面的代码无法运行（但是语法是对的）
    Person.propTypes = {
      	// 限制字符串，必填
      	name: PropTypes.string.isRequired,
      	// 限制字符串
      	sex: PropTypes.string,
      	// 限制数值
      	age: PropTypes.number,
      	// 限制函数(一定是func不是function)
      	speak: PropTypes.func
    }
    // 指定默认值
    Person.defaultProps = {
      	sex: 'male',
      	age: 20
    }
    ReactDOM.render(<Person name="jacob" age="18" sex="male" demo={demo}/>, document.getElementById('test'))

    function demo() {
      	console.log('this is a demo');
    }
</script>
```

另外props可以简写，方法如下所示：

```javascript
<script type="text/babel">
    class Person extends React.Component {
      	// 属性规则制定
      	static propTypes = {
        	name: PropTypes.string.isRequired,
        	sex: PropTypes.string,
        	age: PropTypes.number,
        	speak: PropTypes.func
      	}
      	// 指定默认值
      	static defaultProps = {
        	sex: 'male',
        	age: 20
      	}
      	render() {
        	// 解构赋值
        	const {name, sex, age} = this.props
        
        	return (
          		<ul>
            		<li>Name: {name}</li>
            		<li>Sex: {sex}</li>
            		<li>Age: {age}</li>
          		</ul>
        	)
      	}
    }
    ReactDOM.render(<Person name="jacob" age="18" sex="male" demo={demo}/>, document.getElementById('test'))

    function demo() {
      	console.log('this is a demo');
    }
 </script>
```

函数式组件也可以使用props，但是三大属性中的另外两个：state和refs都不能使用，使用方法如下

```javascript
<script type="text/babel">
    function Person (props) {
      	const {name, age, sex} = props
      	return (
        	<ul>
          		<li>Name: {name}</li>
          		<li>Sex: {sex}</li>
          		<li>Age: {age}</li>
        	</ul>
      	)
    }
    ReactDOM.render(<Person name="jacob" age="18" sex="male"/>, document.getElementById('test'))
 </script>
```

#### （3）refs

**字符串式的refs**

在React组件的标签中可以有一个ref属性（其实功能与原生的id非常相似），React会将所有拥有ref属性的标签以键值对的方式进行存储，key是ref值，而value是该ref值所在标签实例

```javascript
class Demo extends React.Component {
	render() {
        return (
          	<div>
            	<input ref="input1" type="text" placeholder="Click"/>
            	<button ref="btn" onClick={this.showData}>Click</button>
            	<input ref="input2" type="text" placeholder="Blur"/>
          	</div>
        )
	}
    // 展示左侧输入框的数据
    showData = () => {
        console.log(this)
        console.log(this.refs.input1)
    }
}
// 渲染组件
ReactDOM.render(<Demo/>, document.getElementById("test"))
```

控制台结果：

![demo.PNG](https://i.loli.net/2021/03/31/3qVHD5M8gZBJlLO.png)

**注意：这个地方取到的是真实DOM，并非虚拟DOM**

> React官方由于效率问题已经基本弃用字符串模式refs

**回调形式的refs**

```javascript
class Demo extends React.Component {
    render() {
        return (
          	<div>
            	<input ref={c => this.input1 = c} type="text" placeholder="Click"/>
            	<button onClick={this.showData}>Click</button>
            	<input ref={c => this.input2 = c} type="text" placeholder="Click"/>
          	</div>
        )
	}
    // 展示左侧输入框的数据
    showData = () => {
        const {input1} = this
        alert(input1.value)
    }
}
// 渲染组件
ReactDOM.render(<Demo/>, document.getElementById("test"))
```

> 注意：标签中的ref不能更改成别的关键字，因为一旦使用ref，React才会自动将当前节点写入键值对中

**官方建议的类绑定模式refs**

```javascript
class Demo extends React.Component {
    render() {
        return (
         	<div>
            	<input ref={this.saveInput} type="text" placeholder="Click"/>
            	<button onClick={this.showData}>Click</button>
          	</div>
        )
	}
    // 保存输入框信息
    saveInput = (c) => {
        this.input1 = c
    }
    // 展示左侧输入框的数据
    showData = () => {
        const {input1} = this
        alert(input1.value)
    }
}
// 渲染组件
ReactDOM.render(<Demo/>, document.getElementById("test"))
```

使用官方指定的方式无论如何更新都不会重复调用绑定的回调函数，因为已经绑定到了实例自身，但是大多数情况下无关紧要

**新API：CreateRef()**

这种方式是目前React最推荐的模式

```javascript
class Demo extends React.Component {
	// React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点
	// 该容器是专人专用的，也就是说里面只能存一个ref，它的key就是current
    myRef = React.createRef()
    render() {
        return (
          	<div>
            	<input ref={this.myRef} type="text" placeholder="Click"/>
            	<button onClick={this.showData}>Click</button>
          	</div>
        )
	}
    // 展示左侧输入框的数据
    showData = () => {
        alert(this.myRef.current.value)
    }
}
// 渲染组件
ReactDOM.render(<Demo/>, document.getElementById("test"))
```

### 5、事件处理

> 1）通过onXxx属性指定事件的处理函数（尤其要注意大小写）
>
> ​	a.React使用的是自定义（合成）事件，而不是使用原生的DOM事件  -------为了更好的兼容性
>
> ​	b.React中的时间是通过事件委托方式处理的（委托给数组最外层的元素）  -------为了高效性
>
> 2）通过event.target得到发生时间的DOM元素对象

在触发了相关事件后，React会自动将该事件的对象传入对应的方法中，使用event.target即可直接获取当前操作的Dom元素

```javascript
class Demo extends React.Component {
    render() {
        return (
          	<div>
            	<input onBlur={this.blurData} type="text" placeholder="Click"/>
          	</div>
        )
	}
    blurData = (event) => {
        console.log(event.target.value)
    }
}
// 渲染组件
ReactDOM.render(<Demo/>, document.getElementById("test"))
```

### 6、受控与非受控组件

非受控组件（数据现用现取）

```javascript
class Login extends React.Component {
    render() {
        return (
          	<form action="" onSubmit={this.handleSubmit}>
            	用户名：<input ref={c => this.username = c} type="text" name="username" id=""/> 
            	密码：<input ref={c => this.password = c} type="password" name="password" id=""/> 
            	<button>登录</button>
          	</form>
        )
	}
    handleSubmit = (event) => {
        // 组织表单提交默认配置（提交）
        event.preventDefault()
        const {username, password} = this
        alert(username.value, password.value)
    }
}
// 渲染组件
ReactDOM.render(<Login/>, document.getElementById("test"))
```

受控式组件（更加推荐，便于维护），将所有信息存在state中进行维护

```javascript
class Login extends React.Component {
    // 初始化状态
    state = {
        username: '',
        password: ''
    }
	render() {
        return (
            <form onSubmit={this.handleSubmit}>
            	用户名：<input onChange={this.saveUsername} ref={c => this.username = c} type="text" name="username" id=""/> 
            	密码：<input onChange={this.savePassword} ref={c => this.password = c} type="password" name="password" id=""/> 
            	<button>登录</button>
          	</form>
        )
	}
    handleSubmit = (event) => {
        // 组织表单提交默认配置（提交）
        event.preventDefault()
        const {username, password} = this.state
        console.log(username)
        console.log(password)
    }
    saveUsername = (event) => {
        this.setState({username:event.target.value})
    }
    savePassword = (event) => {
        this.setState({password:event.target.value})
    }
}
// 渲染组件
ReactDOM.render(<Login/>, document.getElementById("test"))
```

### 7、补充：三点运算符`...`

对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中

**注意：三点运算符不可以展开对象，但是可以使用{...object}的方式构造字面量对象**

```javascript
<script>
    // 展开数组
    let arr1 = [1, 3, 5]
    let arr2 = [2, 4, 6]
    console.log(...arr1)

    // 合并数组
    let arr3 = [...arr1, ...arr2]
    console.log(arr3)

    // 函数构建（非固定参数）
    function sum(...nums) {
      	return nums.reduce((preValue, currentValue) => {
        	return preValue + currentValue
      	})
    }
    console.log(sum(1, 3, 5, 7, 9));

    // 使用{...}的方式复制对象
    let person = {name: 'jacob', age: 20}
    let person2 = {...person}
    let person3 = person
    person.name = 'lee'
    console.log(person, person2, person3)
</script>
```

### 8、ES6函数及柯里化

**注意：在jsx语法中`{}`触发的是一个回调函数，也就是说，获取的是该函数的return值，这个return可以是函数、变量等等**

```javascript
class Login extends React.Component {
    // 初始化状态
    state = {
        username: '',
        password: ''
    }
	render() {
        return (
            <form onSubmit={this.handleSubmit}>
            	用户名：<input onChange={this.saveForm("username")} ref={c => this.username = c} type="text" name="username" id=""/> 
            	密码：<input onChange={this.saveForm("password")} ref={c => this.password = c} type="password" name="password" id=""/> 
            	<button>登录</button>
          	</form>
        )
	}
    handleSubmit = (event) => {
        // 组织表单提交默认配置（提交）
        event.preventDefault()
        const {username, password} = this.state
        console.log(username)
        console.log(password)
    }
    saveForm = (dataType) => {
        return (event) => {
          	this.setState({[dataType]: event.target.value})
        }
    }
}
// 渲染组件
ReactDOM.render(<Login/>, document.getElementById("test"))
```

> 高阶函数：如果一个函数符合以下两个规范中的任何一个，那这个函数就是高阶函数
>
> 1、若A函数接受单参数是一个函数，那么A就可以称之为高阶函数
>
> 2、若A函数调用的返回值依然是一个函数，那么A就可以称之为高阶函数

常见的高阶函数：Promise，setTimeout，arr.map()等等

**函数的柯里化：通过函数调用继续返回函数的方式，实现多次接收参数的最后统一处理函数编码形式**

## 三、React生命周期

类似于Vue.js的生命周期构造，React中也存在生命周期的构造问题，描述了一个组件由”出生“到”死亡“的一个过程

> 当组件第一次被渲染到 DOM 中的时候，在 React 中被称为“挂载（mount）”。
>
> 当 DOM 中组件被删除的时候，在 React 中被称为“卸载（unmount）”。

### 1、旧生命周期

旧React生命周期流程Ⅰ：

![16775500-8d325f8093591c76.jpg](https://i.loli.net/2021/04/02/4RxX5GaNo7bl2Pu.jpg)

旧生命周期原理图Ⅱ：

![捕获.PNG](https://i.loli.net/2021/04/02/sRkba2hXMPgu6OB.png)

以上这些方法都叫**React生命周期方法**

```javascript
class Demo extends React.Component {
    // 构造器方法，完成初始化工作
    constructor(props) {
        console.log('Count---constructor')
        super(props)
        // 初始化状态
        this.state = {count: 0}
    }
    
    // 加一方法
    add = () => {
        let {count} = this.state
        this.setState({count: count + 1})
    }
    // 卸载组件方法
    death = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('test'))
    }
    
    // componentWillMount方法，组件将要挂载的钩子
    componentWillMount() {
        console.log("Count---componentWillMount")
    }

	// render方法，渲染时的钩子
	render() {
        console.log("Count---render")
        const {count} = this.state
        return (
          	<div>
            	<h2>当前求和：{count}</h2>
            	<button onClick={this.add}>Click +1</button>
            	<button onClick={this.death}>Death</button>
          	</div>
        )
	}
    
    // componentDidMount方法，挂载完成后的钩子
    componentDidMount() {
        console.log("Count---componentDidMount")
    }

	// componentWillUnmount方法，卸载组件前的钩子
    componentWillUnmount() {
        console.log("Count---componentWillUnmount")
    }

    // shouldComponentUpdate方法，相当于一个阀门，控制setState方法是否能修改状态
    // 默认返回的是true，如果返回false，将无法进行任何组件state的更新
    shouldComponentUpdate() {
        console.log("Count---shouldComponentUpdate")
        return true
    }

    // componentWillUpdate方法，组件将要更新的钩子
    componentWillUpdate() {
        console.log("Count---componentWillUpdate")
    }

    // componentDidUpdate方法，组件更新完成的钩子
    componentDidUpdate() {
        console.log("Count---componentDidUpdate")
    }
}

class A extends React.Component {
    // 初始化状态
    state = {
        carName: 'Lexus'
    }

    changeCar = () => {
      	this.setState({
          	carName: 'Benz'
        })
    }

    render() {
       	return (
          	<div>
            	<h2>A组件</h2>
            	<B carName={this.state.carName}/>
            	<button onClick={this.changeCar}>Change</button>
          	</div>
        )
	}
}

class B extends React.Component {
    // componentWillReceiveProps方法，父组件传递props值调用的钩子
    // 第一传的Props不算
    componentWillReceiveProps() {
        console.log("B---componentWillReceiveProps");
    }
    render() {
        return (
          	<h2>B组件，接收：{this.props.carName}</h2>
        )
	}
}

// 渲染组件
ReactDOM.render(<Count/>, document.getElementById("test"))
```

> 1、初始化阶段：由ReactDOM.render()触发----初次渲染
>
> ​	（1）constructor()
>
> ​	（2）componentWillMount()
>
> ​	（3）render()   必须，渲染组件
>
> ​	（4）componentDidMount()   常用，页面一上来就要做的事情非常适合在此钩子进行
>
> 2、更新阶段：由组件内部this.setState()或父组件render触发
>
> ​	（1）shouldComponentUpdate()
>
> ​	（2）componentWillUpdate()
>
> ​	（3）render()   必须，渲染组件
>
> ​	（4）componentDidUpdate()
>
> 3、卸载组件：由ReactDOM.unmountComponentAtNode()触发
>
> ​	（1）componentWillUnmount()  常用，一般在这个钩子中做一些收尾的事情

### 2、新生命周期

在新版本的React中，有三个钩子需要加`UNSAFE_`前缀：

- componentWillReceiveProps()  =>  UNSAFE_componentWillReceiveProps()
- componentWillMount()  =>  UNSAFE_componentWillMount()
- componentWillUpdate()  =>  UNSAFE_componentWillUpdate

也就是说**除了ComponentWillUnmount以外，所有属于Will的钩子都要加上`UNSAFE_`前缀**

但实质上，这三个方法并没有什么存在感，经常存在误用和滥用

新React生命周期流程：

![捕获.PNG](https://i.loli.net/2021/04/04/3cR1ysYHhw5264l.png)

> **新旧生命周期的区别：**旧生命周期即将废弃3个生命周期钩子，分别是：componentWillReceiveProps()，componentWillMount()和componentWillUpdate()，同时又添加了getDerivedStateFromProps()及getSnapshotBeforeUpdate（）两个新钩子

#### getDerivedStateFromProps()

此方法适用于罕见的用例，即 state 的值在任何时候都取决于 props。例如，实现 `<Transition>` 组件可能很方便，该组件会比较当前组件与下一组件，以决定针对哪些组件进行转场动画。

```javascript
// getDerivedStateFromProps静态方法，组件将要挂载的钩子
// 该方法接收可一个参数-props
static getDerivedStateFromProps(props) {
    console.log("Count---getDerivedStateFromProps", props)
    // 如果返回值是一个对象，那么这个组件中状态将以这里的return为主，而且不可修改
    // return {
    //   count: 108
    // }
    return props
}
```

但是这个方法的场景非常罕见，了解即可。若state的值在任何时候都取决于props，那么可以使用该方法

#### getSnapshotBeforeUpdate()

```javascript
// getSnapshotBeforeUpdate方法
// 该方法必须返回一个快照值或者null值
// 快照值可以是任何东西，字符串，数值均可
getSnapshotBeforeUpdate() {
    console.log("Count---getSnapshotBeforeUpdate")
    return "snapshotValue"
}
```

 此外，该方法返回的snapshot（快照）在componentDidUpdate()方法中得到使用

```javascript
// componentDidUpdate方法，组件更新完成的钩子
// 该方法可以接收三个参数：prevProps, prevState, snapshotValue
// prevProps指的是在更新前的props
// prevState指的是在更新前的state
// snapshotValue是从方法getSnapshotBeforeUpdate()返回值中获取的快照
componentDidUpdate(prevProps, prevState, snapshotValue) {
    console.log("Count---componentDidUpdate", prevProps, prevState, snapshotValue)
}
```

但是这个方法的使用也非常罕见，只在极少数特殊情况下使用

## 四、Diffing算法

### 1、算法策略

React的调和算法，主要发生在render阶段，调和算法并不是一个特定的算法函数，而是指在调和过程中，为提高构建workInProcess树的性能，以及Dom树更新的性能，而采用的一种策略，又称diffing算法。 在React 的官网上描述“Diffing” 算法时，提到了“diffing two trees”，但是在源码实现时，并不是创建好两棵树后，再从上往下的diffing这两棵树。这个diffing发生在搭建子节点时, 实际是新生成的ReactElement 与 current树上fibe节点的diffing。 为了将diffing算法的时间复杂度控制在O(n)（树diff的时间复杂度涉及到树的编辑距离，可以看这里）, 采用了如下策略：

1）只比较同层级的节点

2）对于单节点比较，如果当前节点type 和 key 不相同，不再比较其下子节点，直接删掉该节点及其下整棵子树，根据ReactElement重新生成节点树。因为React认为不同类型的组件生成的树形结构不一样，不必复用。

3）如果子节点是数组，可根据唯一的key值定位节点进行比较，这样即使子节点顺序发生变化，也可以根据key值进行复用。

值得注意的是，**所有节点的diffing都会比较key，key 默认值为null。若是没有设置，则null是恒等于null的，认为key是相同的**。

### 2、Key的相关问题

**虚拟DOM中key的作用**

1）简单的说：key是虚拟DoM对象的标识，在更新显示时key起着极其重要的作用

2）详细的说：当状态中的数据发生变化时， react会根据【新数据】生成【新的虚拟DOM】，随后 React进行【新虚拟DOM】与【旧虚拟DOM】的diffing比较，比较规则如下：

a、旧虚拟DOM中找到了与新虚拟DOM相同的key：

（1）若虚拟DOM中内容没变，直接使用之前的真实DON

（2）若虚拟DOM内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM

b、旧虚拟DOM中未找到与新虚拟DOM相同的key根据数据创建新的真实DOM，随后渲染到到页面

**用index作为key可能会引发的问题**

1、若对数据进行：逆序添加、逆序删除等破坏顺序操作：

​		会产生没有必要的真实DOM更新 ==> 界面效果没问题，但效率低

2、如果结构中还包含输入类的DOM：

​		会产生错误DOM更新 ==> 界面有问题

3、如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用 index作为key是没有问题的

**开发中如何选择key**

1、最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值

2、如果确定只是简单的展示数据，用 index也是可以的

## 五、React应用

### 1、React脚手架

脚手架：用于帮助程序员快速创建一个基于某库的模板项目

项目的整体架构：React + webpack + EcmaScript6 + eslint

使用脚手架开发的项目特点：模块化、组件化、工程化

### 2、使用脚手架构建

**第一步**，全局安装：`npm install -g create-react-app`

**第二步**，切换到想创建项目的目录，使用命令：`create-react-app hello-react`

**第三步**，进入项目文件夹：`cd hello-react`

**第四步**，启动项目：`npm start`

### 3、脚手架文件说明

**public — 静态资源文件夹**

favicon.icon — 网站偏爱图标

index.html — 主页面

logo192.png — logo图

ogo512 — logo图

manifest.json — 应用加壳的配置文件

robots.txt — 爬虫协议文件

**src — 源码文件夹**

App.css — App组件的样式

App.js — App组件

App.test.js — 给App测试

index.css — 样式

index.js — 入口文件

logo.svg — logo图

reportWebVitals.js — 页面性能分析文件（需要web-vitals库的支持）

setupTests.js — 组件单元测试的文件（需要jest-dom库的支持）

#### （1）public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!--  %PUBLIC_URL%代表的是public文件夹的路径  -->
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <!--  开启理想视口，用于做移动端网页适配  -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--  用于配置浏览器页签 + 地址栏的颜色，只针对安卓手机浏览器  -->
    <meta name="theme-color" content="#000000" />
    <!--  描述网站信息  -->
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <!--  用于指定网页添加到iPhone主屏幕后的图标  -->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--  应用加壳时的配置文件  -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <!--  用于提示不支持Javascript的浏览器时展示，若浏览器支持则不显示  -->
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

#### （2）src/index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 用于记录页面性能，里面使用了web-vitals库
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>用处：检查<App />及<App />内部所有子组件不合理的地方
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```

### 4、Hello React

项目目录：

![1.PNG](https://i.loli.net/2021/04/06/A9NdlbjVOL6RWnt.png)

在src/components目录中下辖的每一个文件夹代表的都是一个个组件，每一个组件由css和主核心的jsx（或js）文件构成

Hello.jsx：

```javascript
import React, {Component} from 'react'
import './Hello.css'

export default class Hello extends Component {
  render() {
    return <h1 className="title">Hello, React</h1>
  }
}
```

Hello.css：

```css
.title {
    background-color: orange;
}
```

然后在作为外壳组件的App.js中进行引入（实际上可以将App.js理解成最外层的一个大组件，在大组件中集成小组件进行统一引入）

```javascript
// 引入React
import React, {Component} from 'react'

// 引入组件
import Hello from './components/Hello/Hello'
import Welcome from "./components/Welcome/Welcome";

// 创建外壳组件App
export default class App extends Component {
  render() {
    return (
        <div>
          <Hello/>
          <Welcome/>
        </div>
    )
  }
}
```

最后于index.js（入口文件）中进行渲染

```javascript
// 引入React核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入App组件
import App from './App'

// 渲染App到页面
ReactDOM.render(<App/>, document.getElementById('root'))
```

使用`npm start`命令将整个项目跑起来

![1.PNG](https://i.loli.net/2021/04/06/Fj86nfiRlwvc7Vz.png)

> 在WebStorm和VScode（需安装ES7 React插件）中使用`rcc`直接快速构建类式组件，使用`rfc`直接快速构建函数值组件

## 六、React Ajax

### 1、理解

1、React本身只关注与界面，并不包含发送Ajax请求的代码

2、前端应用需要通过Ajax请求与后台进行交互（json数据）

3、React应用中需要集成第三方Ajax库（或者自己封装）

### 2、常用的Ajax请求库

jQuery（比较重，如果需要另外引入不建议使用）

axios（轻量级，建议使用）

axios具有promise风格，可以在浏览器端和node服务器端

详见博客：[通过setupProxy在React中配置axios](https://lee8150951.github.io/blog/article/react/react-axios.html#axios%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95)

## 补充：消息订阅与发布机制

### 原生写法

在React原生环境下是不支持兄弟组件之间的信息直接进行通讯的，只能使用最为原始的方法：

假设父组件X下拥有两个子组件分别是：组件a和组件b，组件a、b就互为一对兄弟组件，此时子组件a要将内部的一组数据传给子组件b，要做的操作就必须是组件a将信息传递给父组件X，组件b通过props从父组件X处获取这些信息。流程示意如下：

![flow.PNG](https://i.loli.net/2021/04/13/F7beSfWMPugZyzs.png)

父组件：

```javascript
class App extends Component {
  state = {
    // users初始值为数组
    users: [],
    // 是否为第一次打开页面
    isFirst: true,
    // 标识加载中
    isLoading: false,
    // 存储错误信息
    err: ''
  }

  // 更新App的state
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        {/*批量传递*/}
        <List {...this.state}/>
      </div>
    );
  }
}
```

子组件a：

```javascript
import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {
  myRef = React.createRef()

  search = () => {
    const myRef = this.myRef.current.value
    // 发送请求前通知app更新状态
    this.props.updateAppState({
      isFirst: false,
      isLoading: true
    })
    // 发送网络请求
    axios.get(`/api/search/users?q=${myRef}`).then(
      response => {
        // 发送请求后通知app更新状态
        this.props.updateAppState({
          isLoading: false,
          users: response.data.items
        })
      },
      error => {
        // 请求失败后的状态
        this.props.updateAppState({
          isLoading: false,
          err: '请求出错'
        })
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHub用户</h3>
        <div>
          <input ref={this.myRef} type="text" placeholder="输入关键字搜索"/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}

export default Search;
```

子组件b：

```javascript
import React, {Component} from 'react';

import './index.css'

class List extends Component {
  render() {
    const {users, isLoading, isFirst, err} = this.props
    return (
      <div className="row">
        {
          isFirst ? <h2>输入关键字搜索后展示</h2> :
            isLoading ? <h2>Loading...</h2> :
              err ? <h2 style={{color: 'red'}}>{err}</h2> :
                users.map((userObj) => {
                  return (
                    <div key={userObj.id} className="card">
                      <a href={userObj.html_url} target="_blank" rel="noreferrer">
                        <img alt="avatar" src={userObj.avatar_url} style={{width: '100px'}}/>
                      </a>
                      <p className="card-text">{userObj.login}</p>
                    </div>
                  )
                })
        }
      </div>
    );
  }
}

export default List;
```

### PubSubJS

pubsub.js是基于React的拓展库，解决了兄弟组件之间通讯困难的问题，通过该拓展库React项目可以直接通过**消息订阅与发布**的方式进行组件间的通讯

可以将其通俗的理解成：

- 绑定事件监听 ==> 订阅消息
- 触发事件 ==> 发布消息

#### 安装命令

```shell
yarn add pubsub-js
```

#### 常用方法

- 发送消息：`PubSub.publish(名称,参数)`
- 订阅消息：`PubSub.subscrib(名称,函数)`
- 取消订阅：`PubSub.unsubscrib(名称)`

在使用了pubsub.js模块后，父组件变得非常简单，只需要最基本的渲染功能即可

**值得注意的是：state属性哪个组件使用就放在哪个组件之上**

父组件：

```javascript
import React, {Component} from 'react';

import Search from "./components/Search";
import List from "./components/List";


class App extends Component {

  render() {
    return (
      <div className="container">
        <Search/>
        <List/>
      </div>
    );
  }
}

export default App;
```

发送组件：

```javascript
import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import axios from "axios";

class Search extends Component {
  myRef = React.createRef()

  search = () => {
    const myRef = this.myRef.current.value
    // 发送请求前通知List更新状态
    PubSub.publish('flag', {
      isFirst: false,
      isLoading: true
    })
    // 发送网络请求
    axios.get(`/api/search/users?q=${myRef}`).then(
      response => {
        // 发送请求后通知List更新状态
        PubSub.publish('flag', {
          isLoading: false,
          users: response.data.items
        })
      },
      error => {
        // 请求失败后的状态
        PubSub.publish('flag', {
          isLoading: false,
          err: error.message
        })
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHub用户</h3>
        <div>
          <input ref={this.myRef} type="text" placeholder="输入关键字搜索"/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}

export default Search;
```

接收渲染组件：

```javascript
import React, {Component} from 'react';
import PubSup from 'pubsub-js'
import './index.css'

class List extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }

  // 订阅消息事件：当组件一旦创建就应该订阅消息
  componentDidMount() {
    PubSup.subscribe('flag', (msg, data) => {
      this.setState(data)
    })
  }

  render() {
    const {users, isLoading, isFirst, err} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>输入关键字搜索后展示</h2> :
            isLoading ? <h2>Loading...</h2> :
              err ? <h2 style={{color: 'red'}}>{err}</h2> :
                users.map((userObj) => {
                  return (
                    <div key={userObj.id} className="card">
                      <a href={userObj.html_url} target="_blank" rel="noreferrer">
                        <img alt="avatar" src={userObj.avatar_url} style={{width: '100px'}}/>
                      </a>
                      <p className="card-text">{userObj.login}</p>
                    </div>
                  )
                })
        }
      </div>
    );
  }
}

export default List;
```