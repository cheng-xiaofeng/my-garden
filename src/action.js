const CHANGENAME = 'CHANGENAME'

export function changeName(data) {
  console.log(333);
  return dispatch => (
    dispatch({
    type: CHANGENAME,
    payload:data
  }))
} 