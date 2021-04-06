// 引入React
import React, {Component} from 'react'
import './App.css'

// 引入组件
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

// 创建外壳组件App
export default class App extends Component {

  state = {
    todos: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '学习', done: false},
      {id: '003', name: '睡觉', done: true}
    ]
  }

  // 子传父（添加todo）
  addTodo = (todoObj) => {
    // 获取原todos
    const {todos} = this.state
    // 追加一个todo
    const newTodos = [todoObj, ...todos]
    // 赋值
    this.setState({
      todos: newTodos
    })
  }

  // 子传父（修改check，更新todo对象）
  updateTodo = (id, done) => {
    // 获取原todos
    const {todos} = this.state
    // 匹配并加工数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return {...todoObj, done}
      else return todoObj
    })
    this.setState({
      todos: newTodos
    })
  }

  // 删除Todo
  deleteTodo = (id) => {
    // 获取原todos
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }

  // 全选
  checkAllTodo = (done) => {
    // 获取原todos
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      return {...todoObj, done}
    })
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }

  // 清除所有已完成项目
  clearAllDone = () => {
    // 获取原todos
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const {todos} = this.state
    return (
        <div>
          <div className="todo-container">
            <div className="todo-wrap">
              <Header addTodo={this.addTodo}/>
              <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
              <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
            </div>
          </div>
        </div>
    )
  }
}