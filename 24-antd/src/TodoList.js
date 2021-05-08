import React, {Component} from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import store from './store'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.storeChange)
  }

  changeInputValue = (e) => {
    const action = {
      type: 'changeInput',
      value: e.target.value
    }
    store.dispatch(action)
  }

  storeChange = () => {
    this.setState(store.getState())
  }

  render() {
    return (
      <div>
        <div style={{margin: '20px'}}>
          <Input type="text" placeholder={this.state.inputValue} style={{width: '250px'}} onChange={this.changeInputValue}/>
          <Button type="primary" style={{marginLeft: '10px'}}>Add</Button>
        </div>
        <div style={{margin: '20px', width: '318px'}}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={item => (<List.Item>{item}</List.Item>)}/>
        </div>
      </div>
    );
  }
}

export default TodoList;