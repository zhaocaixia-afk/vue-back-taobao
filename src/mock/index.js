import Mock from 'mockjs'
import homeApi from './home'
import userApi from './user'

Mock.setup({
  timeout: '200-2000'
})

// home页
Mock.mock(/\/home\/getData/, 'get', homeApi.getHomeData)

// user页
Mock.mock(/\/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/\/user\/del/, 'get', userApi.deleteUser)
Mock.mock(/\/user\/batchremove/, 'get', userApi.batchremove)
Mock.mock(/\/user\/add/, 'post', userApi.createUser)
Mock.mock(/\/user\/edit/, 'post', userApi.updateUser)
