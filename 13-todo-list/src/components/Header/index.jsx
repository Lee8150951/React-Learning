import React, {Component} from 'react';
import {nanoid} from "nanoid";
import PropTypes from "prop-types"

import './index.css'

class Header extends Component {
  // 对接受的props进行类型和必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    // 获取keyCode和target
    const {keyCode, target} = event
    // 获取键盘是否为回车
    if (keyCode !== 13) return
    // 添加的todo不可为空
    if (target.value.trim() === '') {
      alert('输入不可为空')
      return
    }
    // 新建todo对象
    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false
    }
    this.props.addTodo(todoObj)

    // 清空输入
    target.value = ''
  }

  render() {
    return (
        <div>
          <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
          </div>
        </div>
    );
  }
}

export default Header;