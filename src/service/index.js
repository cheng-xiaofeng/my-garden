import request from "./request";

export function getdata() {
  return request('/', 'get')
}