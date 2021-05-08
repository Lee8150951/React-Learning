// 建立仓库管理员

// 默认参数
const defaultState = {
  inputValue: 'Write Something',
  list: [
    'Actions speak louder than words.',
    'Constant dropping wears the stone.',
    'Every man is his own worst enemy.'
  ]
}
export default (state = defaultState, action) => {
  console.log(state, action)
  // Reducer里只能接收state，不能改变原有state
  if (action.type === 'changeInput') {
    // 深度拷贝
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  return state
}