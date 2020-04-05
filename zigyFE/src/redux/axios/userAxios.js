import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

export function loginAPI(authParams){
    return axios.request({
        method: 'post',
        url: 'api/user/v1/authenticate',
        data: authParams
    })
}

export function signUpAPI(authParams){
    return axios.request({
        method: 'post',
        url: 'api/user/v1/register',
        data: authParams
    })
}