import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/'
})

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default axiosInstance
