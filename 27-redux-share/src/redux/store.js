/*
* 该文件专门用于暴露一个store对象，整个应用也只有一个store对象
*/

// 引入createStore专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware, combineReducers} from 'redux'
// 引入为count服务的reducer
import countReducer from './reducers/count'
// 引入为person服务的reducer
import personReducer from "./reducers/person";
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

// 合并reducer
// 这里的对象是不同的reducer对应的不同key-value键值对
const allReducer = combineReducers({
  count: countReducer,
  person: personReducer
})
// 默认暴露store对象
export default createStore(allReducer, applyMiddleware(thunk))