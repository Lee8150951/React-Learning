import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = {
      id: nanoid(),
      name, age
    }
    this.props.addPerson(personObj)
  }

  render() {
    return (
      <div>
        <h2>Person组件，上方求和为：{this.props.count}</h2>
        <input ref={c => this.nameNode = c} type="text" placeholder="输入姓名"/>&nbsp;
        <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>&nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.personList.map((p) => {
              return <li>{p.name} -- {p.age}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    personList: state.person,
    count: state.count
  }),
  {
    addPerson: createAddPersonAction
  }
)(Person)