import { combineReducers } from 'redux'

function getName(state={name: 'jeckie'}, action) {
  switch (action.type) {
    case 'CHANGENAME':
      return {...state, ...action.payload}
    default:
      return {...state}
      break;
  }
}

const reducers = combineReducers({
  getName
})

export default reducers