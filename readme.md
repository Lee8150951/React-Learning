# React全家桶

## 一、React简介

### 1、React是什么

用于构建用户界面的JavaScript库，值得注意的是React只注意界面构建。

理解：React是一个将数据渲染成HTML视图的js库。

### 2、React的特点

1）采用组件化模式、声明式编码、提高开发效率和组建的复用率

2）在React Native中可以使用React语法进行移动开发

3）React使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互

### 3、Hello React

1）准备React容器

2）按顺序引入React文件

3）写入js文件

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
    <!-- 引入babel，用于将jsx转化为js -->
    <script type="text/javascript" src="../assets/react-0.14.3/build/babel.min.js"></script>

    <script type="text/babel">
        // 1、创建虚拟dom
        const VDOM = <h1>Hello, React!</h1>
        // 2、使用React渲染虚拟dom到界面
        ReactDOM.render(VDOM, document.getElementById('test'))
    </script>
</body>
</html>
````

