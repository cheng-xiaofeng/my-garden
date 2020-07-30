import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
const initState = {
  
}
function logger() {
  return next => action => {
    next(action)
  }
}
const store = createStore(
  reducers,
  initState,
  applyMiddleware(thunkMiddleware, logger)
)

export default store