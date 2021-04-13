import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import axios from "axios";

class Search extends Component {
  myRef = React.createRef()

  search = () => {
    const myRef = this.myRef.current.value
    // 发送请求前通知List更新状态
    PubSub.publish('flag', {
      isFirst: false,
      isLoading: true
    })
    // 发送网络请求
    axios.get(`/api/search/users?q=${myRef}`).then(
      response => {
        // 发送请求后通知List更新状态
        PubSub.publish('flag', {
          isLoading: false,
          users: response.data.items
        })
      },
      error => {
        // 请求失败后的状态
        PubSub.publish('flag', {
          isLoading: false,
          err: error.message
        })
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHub用户</h3>
        <div>
          <input ref={this.myRef} type="text" placeholder="输入关键字搜索"/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}

export default Search;