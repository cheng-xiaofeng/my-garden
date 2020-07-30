import { combineReducers } from 'redux'
function changePageReducer(state={key: '1'}, action) {
  switch (action.type) {
    case 'CHANGEPAGE':
      return {...state, ...action.payload}
    default:
      return {...state}
      break;
  }
}
const reducers = combineReducers({
  changePageReducer
})
export default reducers