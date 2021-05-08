// 仓库管理文件
import {createStore} from 'redux'
import reducer from "./reducer"
const store = createStore(
  reducer,
  // 开启Chrome中Redux开发工具
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store