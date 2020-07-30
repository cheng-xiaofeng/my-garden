function changePageReducer(state={}, action) {
  switch (action.type) {
    case 'CHANGEPAGE':
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