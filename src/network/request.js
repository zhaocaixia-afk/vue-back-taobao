import axios from 'axios'

export function request(config) {
  // console.log(config)
  const instance = axios.create({
    // method: config.method || 'get',
    timeout: 3000
  })

  instance.interceptors.request.use(
    config => {
      return config
    },
    error => console.log(error + 'error')
  )

  instance.interceptors.response.use(
    response => {
      return response.data
    },
    error => console.log(error + 'error')
  )

  return instance(config)
}
