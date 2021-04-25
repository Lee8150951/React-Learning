import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import About from './pages/About'
import Home from './pages/Home'
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中靠a标签跳转不同的页面 */}
              {/*<a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a>*/}

              {/* 在react中靠路由连接实现，编写路由链接 */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                  <Redirect to="/about"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;