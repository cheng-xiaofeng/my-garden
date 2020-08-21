import {getdata} from '../../service/index'
const CHANGEPAGE = 'CHANGEPAGE'
const GETDATA = 'GETDATA'
export function changePage(itemKey) {
  return dispatch => (
    dispatch({
    type: CHANGEPAGE,
    payload:{
      itemKey
    }
  }))
} 

export function getdata1(obj) {
  return dispatch => {
    return getdata(obj).then(data => {
      dispatch({
        type: GETDATA,
        payload: {
          data,
          code: data.data.code
        }
      })
    })
  }
}