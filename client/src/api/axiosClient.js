import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async(config)=>{
    //handel token here....
    return config;
})

axiosClient.interceptors.response.use((res)=>{
    if(res && res.data){
        return res.data;
    }
    return res;
    },error=>{
        throw error;
});

export default axiosClient; 