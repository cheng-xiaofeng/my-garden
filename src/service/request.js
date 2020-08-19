import axios from 'axios'

function request(url, method, data) {
  console.log(window.location.localhost)
  axios({
    method,
    url,
    data,
    withCredentials: true,
    baseURL: `//${window.location.hostname}:3002` //'https://192.168.1.108/'
  })
  console.log('3343434')
}

export default request