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
                  {/* 向路由组件传递state参数 */}
                  <Link to={{
                    pathname: '/home/message/detail',
                    state: {
                      id: msgObj.id,
                      title: msgObj.title
                    }
                  }}>{msgObj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <Switch>
          {/* 声明接收state参数（无需声明接收，正常注册即可） */}
          <Route path="/home/message/detail" component={Detail}/>
        </Switch>
      </div>
    );
  }
}

export default Message;