import React, {Component} from 'react';

import Search from "./components/Search";
import List from "./components/List";


class App extends Component {
  state = {
    // users初始值为数组
    users: [],
    // 是否为第一次打开页面
    isFirst: true,
    // 标识加载中
    isLoading: false,
    // 存储错误信息
    err: ''
  }

  // 更新App的state
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        {/*批量传递*/}
        <List {...this.state}/>
      </div>
    );
  }
}

export default App;