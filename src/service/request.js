import axios from 'axios'

function request(url, method, data) {
  axios({
    method,
    url,
    data,
    baseURL: 'https://192.168.1.108/'
  })
}

export {
  request
}