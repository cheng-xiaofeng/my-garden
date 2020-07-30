const CHANGEPAGE = 'CHANGEPAGE'

export function changeName(data) {
  return dispatch => (
    dispatch({
    type: CHANGEPAGE,
    payload:data
  }))
} 