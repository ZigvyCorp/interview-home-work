import axios from 'axios';
import queryString from 'querystring';

//Create axios Client
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});


//Config request interceptor for axiosClient
axiosClient.interceptors.request.use(async (config) => {
    return config;
});
//Config data response interceptor for axiosClient
axiosClient.interceptors.response.use(async (response) => {
    //Handle data response
    if (response && response.data) {
        return response.data;
    }
    return response;
}, err => {
    //Handle error response
    throw err;
});

export default axios;