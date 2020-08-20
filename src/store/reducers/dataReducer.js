function getdata(state={}, action) {
  switch (action.type) {
    case 'GETDATA':
      return {...state, data: action.payload.data}
    default:
      return {...state}
  }
}

const reducers = {
  getdata
}

export default reducers