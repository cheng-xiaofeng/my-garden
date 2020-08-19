import axios from 'axios'

function request(url, method, data) {
  return axios({
    method,
    url,
    data,
    withCredentials: true,
    baseURL: `//${window.location.hostname}:3002` //'https://192.168.1.108/'
  })
}

export default request