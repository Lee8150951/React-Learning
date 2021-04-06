import React, {Component} from 'react';
import './index.css'

class Footer extends Component {

  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props
    // 计算已完成的个数
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    // 计算总数
    const total = todos.length
    return (
        <div>
          <div className="todo-footer">
            <label>
              <input type="checkbox" checked={doneCount === total} onChange={this.handleCheckAll}/>
            </label>
            <span>
                  <span>已完成{doneCount}</span> / 全部{total}
                </span>
            <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
          </div>
        </div>
    );
  }
}

export default Footer;