function changePageReducer(state={itemKey: ['1']}, action) {
  switch (action.type) {
    case 'CHANGEPAGE':
      console.log('222', action)
      return {...state, ...action.payload}
    default:
      return {...state}
      break;
  }
}
const reducers = {
  changePageReducer
}
export default reducers