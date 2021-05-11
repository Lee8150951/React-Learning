import React, {Component} from 'react';
// 引入用于连接UI组件与redux的方法
import {connect} from 'react-redux'
// 引入Redux的reducer
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/actions/count'

// UI组件
class Count extends Component {
  // 加法
  increment = () => {
    const {value} = this.selectNumber
    this.props.increment(value * 1)
  }

  // 减法
  decrement = () => {
    const {value} = this.selectNumber
    this.props.decrement(value * 1)
  }

  // 奇数再加
  incrementIfOdd = () => {
    const {value} = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }

  // 异步加
  incrementAsync = () => {
    const {value} = this.selectNumber
    this.props.incrementAsync(value * 1, 500)
  }

  render() {
    return (
      <div>
        <h2>Count组件，下方总人数为：{this.props.person}</h2>
        <h4>当前求和为：{this.props.count}</h4>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  state => ({
    count: state.count,
    person: state.person.length
  }),

  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
  }
)(Count)