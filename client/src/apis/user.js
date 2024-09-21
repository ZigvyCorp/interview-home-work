import axios from '../axios'

export const apiRegister = (data) => axios({
    url: '/signup',
    method: 'post',
    data,
    withCredentials: true
})

export const apiLogin = (data) => axios({
    url: '/signin',
    method: 'post',
    data
})

export const apiGetCurrent = (data) => axios({
    url: '/current',
    method: 'get',
    data
})