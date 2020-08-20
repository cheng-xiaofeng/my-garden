import { combineReducers } from 'redux'
import changePageReducer from './changePageReducer'
import getdata from './dataReducer'

const reducers = combineReducers({
  ...changePageReducer,
  ...getdata
})

export default reducers