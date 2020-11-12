import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default instance
