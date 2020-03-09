import { request } from './request.js'

export function login(data) {
  return request({
    url: '/permission/getMenu',
    method: 'post',
    data
  })
}
