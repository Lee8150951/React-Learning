/*
  该文件专门用于为Count组件生成action对象
*/
import {INCREMENT, DECREMENT} from './constant'

// 加法，同步action，返回值为对象
export const createIncrementAction = data => {
  return {type: INCREMENT, data}
}

// 减法，同步action，返回值为对象
export const createDecrementAction = data => {
  return {type: DECREMENT, data}
}

// 异步加法，异步action，返回值为方法
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time)
  }
}