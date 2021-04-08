import React, {Component} from 'react';
// 引入axios
import axios from "axios";

class App extends Component {

  getStudentData = () => {
    axios.get("http://localhost:3000/api1/students").then(
        response => {
          console.log('success', response.data)
        },
        error => {
          console.log('error', error)
        }
    )
  }

  getCarData = () => {
    axios.get("http://localhost:3000/api2/cars").then(
      response => {
        console.log('success', response.data)
      },
      error => {
        console.log('error', error)
      }
    )
  }

  render() {
    return (
        <div>
          <button onClick={this.getStudentData}>点我获取Student</button>
          <button onClick={this.getCarData}>点我获取Car</button>
        </div>
    );
  }
}

export default App;
