import React, {Component} from 'react';
import {Link, Switch, Route} from "react-router-dom"

import Detail from "./Detail";

class Message extends Component {
  state = {
    messageArr: [
      {id: '01', title: 'Message1'},
      {id: '02', title: 'Message2'},
      {id: '03', title: 'Message3'}
    ]
  }

  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj) => {
              return (
                <li key={msgObj.id}>
                  {/* 向路由组件传递params参数 */}
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <Switch>
          {/* 声明接收params参数 */}
          <Route path="/home/message/detail/:id/:title" component={Detail}/>
        </Switch>
      </div>
    );
  }
}

export default Message;