import React, {Component} from 'react';

const DetailData = [
  {id: '01', content: 'Hello World'},
  {id: '02', content: 'Hello Future'},
  {id: '03', content: 'Hello Jacob'}
]

class Detail extends Component {
  render() {
    // 接收state参数
    const {id, title} = this.props.location.state || {}

    const findResult = DetailData.find((detailObj) => {
      return detailObj.id === id
    }) || {}
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