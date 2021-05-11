/*
* 1、该文件用于创建一个为Count组件服务的reducer，reducer的本质是一个函数
* 2、reducer函数会接到两个参数，分别是：之前的状态（preState），动作对象（action）
*/
import {INCREMENT, DECREMENT} from '../constant'
// 初始化preState
const iniState = 0
export default function countReducer(preState = iniState, action) {
  // 从action对象中获取type、data
  const {type, data} = action
  // 根据type决定如何加工数据
  switch (type) {
    case INCREMENT:// 加
      return preState + data
    case DECREMENT:// 减
      return preState - data
    default:// 初始化状态
      return preState
  }
}