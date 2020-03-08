import axios from 'axios'

import userServices from './user'
import postServices from './post'
import commentServices from './comment'

export default ({ baseUrl, timeout }) => {
  const defaultConfig = {
    baseURL: baseUrl,
    timeout,
    // mode: baseUrl ? 'cors' : 'same-origin',
    // credentials: baseUrl ? 'include' : 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  const axiosInstance = axios.create({ ...defaultConfig, method: 'POST' })

  axiosInstance.interceptors.response.use(
    res => res.data,
    err => Promise.reject(err.response || err.request || err),
  )

  const setAuthorizationToken = token => {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
    return axiosInstance.defaults.headers.common.Authorization === token
  }

  return {
    user: userServices(axiosInstance),
    post: postServices(axiosInstance),
    comment: commentServices(axiosInstance),
    setAuthorizationToken,
  }
}
