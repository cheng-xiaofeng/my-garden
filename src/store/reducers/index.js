import { combineReducers } from 'redux'
import changePageReducer from './changePageReducer'


const reducers = combineReducers({
  ...changePageReducer
})

export default reducers