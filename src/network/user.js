import { request } from './request'

export function getUserList(params) {
  return request({
    url: '/user/getUser',
    params
  })
}
