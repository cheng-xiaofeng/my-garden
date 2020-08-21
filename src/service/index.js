import request from "./request";

export function getdata(data) {
  return request('/cat', 'post', data)
}