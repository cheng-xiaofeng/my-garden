const CHANGEPAGE = 'CHANGEPAGE'

export function changePage(itemKey) {
  return dispatch => (
    dispatch({
    type: CHANGEPAGE,
    payload:{
      itemKey
    }
  }))
} 