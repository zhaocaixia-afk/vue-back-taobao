import axios from 'axios'

export function request(config) {
  // const data = config.data || {}
  // console.log(config.params)

  const instance = axios.create({
    // data: data
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
