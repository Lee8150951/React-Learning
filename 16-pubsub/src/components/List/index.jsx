import React, {Component} from 'react';
import PubSup from 'pubsub-js'
import './index.css'

class List extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }

  // 订阅消息事件：当组件一旦创建就应该订阅消息
  componentDidMount() {
    PubSup.subscribe('flag', (msg, data) => {
      this.setState(data)
    })
  }

  render() {
    const {users, isLoading, isFirst, err} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>输入关键字搜索后展示</h2> :
            isLoading ? <h2>Loading...</h2> :
              err ? <h2 style={{color: 'red'}}>{err}</h2> :
                users.map((userObj) => {
                  return (
                    <div key={userObj.id} className="card">
                      <a href={userObj.html_url} target="_blank" rel="noreferrer">
                        <img alt="avatar" src={userObj.avatar_url} style={{width: '100px'}}/>
                      </a>
                      <p className="card-text">{userObj.login}</p>
                    </div>
                  )
                })
        }
      </div>
    );
  }
}

export default List;