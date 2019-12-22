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
        
        //another respond: remove token and go to home
        if(localStorage.getItem('token')) localStorage.removeItem('token')

    },
    error => {
      window.location.href = '/home'

    }
  )


  export default service

  /*

      withCredentials: true,
    credentials: 'same-origin',
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Origin': '*'
    }

  */
