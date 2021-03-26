

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