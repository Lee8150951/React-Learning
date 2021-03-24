

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

