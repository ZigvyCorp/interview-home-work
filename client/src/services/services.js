import axios from 'axios'
import {variableConstants} from '../constants/variable.constants'


const service = axios.create({
    baseURL: `http://${variableConstants.HOST}:${variableConstants.PORT}`, // url = base url + request url
    timeout: 5000, // request timeout
  })

service.interceptors.request.use(
    config => {
        if (localStorage.getItem('token')) config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
      return config
    },
    error => {
      return Promise.reject(error)
    },
  )

  service.interceptors.response.use(
    response => {
        // respond status 200
        if(response.status == 200) return response.data

        //another respond will remove all token (401, 400, 403)
        localStorage.removeItem('token')
        localStorage.removeItem('userData')
        window.location.href='/home'
    },
    error => {
      return Promise.reject(error.message)
    }
  )


  export default service
