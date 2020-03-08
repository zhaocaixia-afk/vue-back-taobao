import { request } from './request'

export function getUserList(params) {
  return request({
    url: '/user/getUser',
    params
  })
}

export function editUser(data) {
  return request({
    url: '/user/edit',
    method: 'post',
    data
  })
}

export function addUser(data) {
  return request({
    url: '/user/add',
    method: 'post',
    data
  })
}
