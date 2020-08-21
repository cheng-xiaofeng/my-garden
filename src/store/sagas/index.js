import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {getdata} from '../../service/index'
import { all } from 'redux-saga/effects'

function* getdata1 (action) {
  try {
    // const data = yield call(getdata)
    // yield put({type: 'GETDATA', data})
  } catch (error) {
    
  }
}

function* mySaga() {
  yield takeEvery('GETDATA', getdata1)
}

export default function* rootSaga(){
  yield all([
    getdata1(),
    mySaga()
  ])
}