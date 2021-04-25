import React, {Component} from 'react';
import qs from 'querystring'

const DetailData = [
  {id: '01', content: 'Hello World'},
  {id: '02', content: 'Hello Future'},
  {id: '03', content: 'Hello Jacob'}
]

class Detail extends Component {
  render() {
    // 接收search参数
    const {search} = this.props.location
    // 使用qs解析search参数
    const {id, title} = qs.parse(search.slice(1))

    const findResult = DetailData.find((detailObj) => {
      return detailObj.id === id
    })
    return (
      <div>
        <hr/>
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{findResult.content}</li>
        </ul>
      </div>
    );
  }
}

export default Detail;