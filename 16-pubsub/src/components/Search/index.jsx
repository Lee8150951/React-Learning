import React, {Component} from 'react';
import PubSub from 'pubsub-js'
// import axios from "axios";

class Search extends Component {
  myRef = React.createRef()

  search = async () => {
    const myRef = this.myRef.current.value
    // 发送请求前通知List更新状态
    PubSub.publish('flag', {
      isFirst: false,
      isLoading: true
    })
    // 发送网络请求（使用axios方法）
    // axios.get(`/api/search/users?q=${myRef}`).then(
    //   response => {
    //     // 发送请求后通知List更新状态
    //     PubSub.publish('flag', {
    //       isLoading: false,
    //       users: response.data.items
    //     })
    //   },
    //   error => {
    //     // 请求失败后的状态
    //     PubSub.publish('flag', {
    //       isLoading: false,
    //       err: error.message
    //     })
    //   }
    // )

    // 发送网络请求（使用fetch方法）(未优化)
    // fetch('/api/search/users2?q=${myRef}').then(
    //   response => {
    //     console.log('success')
    //     return response.json()
    //   }
    // ).then(
    //   response => {
    //     console.log('success', response)
    //   }
    // ).catch(
    //   error => {
    //     console.log('error', error)
    //   }
    // )

    // 发送网络请求（使用fetch方法）(优化)
    try {
      const response = await fetch('/api/search/users2?q=${myRef}')
      const data = await response.json()
      PubSub.publish('flag', {
        isLoading: false,
        users: data.items
      })
    } catch (error) {
      PubSub.publish('flag', {
        isLoading: false,
        err: error.message
      })
    }
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