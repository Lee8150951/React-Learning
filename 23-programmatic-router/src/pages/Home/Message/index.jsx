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

  replaceShow = (id, title) => {
    // params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

    // search参数
    // this.props.history.replace(`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`)

    // state参数
    this.props.history.replace(`/home/message/detail`, {id, title})
  }

  pushShow = (id, title) => {
    // params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    // search参数
    // this.props.history.push(`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`)

    // state参数
    this.props.history.push(`/home/message/detail`, {id, title})
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
                  <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>push</button>
                  <button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>replace</button>
                </li>
              )
            })
          }
        </ul>
        <Switch>
          <Route path="/home/message/detail" component={Detail}/>
        </Switch>
      </div>
    );
  }
}

export default Message;