import React, {Component} from 'react';

import './index.css'

class List extends Component {
  render() {
    const {users, isLoading, isFirst, err} = this.props
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