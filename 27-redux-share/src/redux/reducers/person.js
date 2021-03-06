import {ADD_PERSON} from '../constant'

const initState = [{id: '', name: 'Tom', age: 20}]
export default function personReducer(preState = initState, action) {
  // 从action对象中获取type、data
  const {type, data} = action
  // 根据type决定如何加工数据
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]
    default:
      return preState
  }
}