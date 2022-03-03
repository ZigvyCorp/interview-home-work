require('dotenv').config();
const axios = require('axios');

const mockup_api = process.env.MOCKUP_API;
const port = process.env.PORT;

const axiosServer = axios.create({
    baseURL:mockup_api,
    headers:{
        "content-type": "application/json"
    },
});

axiosServer.interceptors.request.use(async(config)=>{
    //handel token here....
    return config;
});

axiosServer.interceptors.response.use((res)=>{
    if(res && res.data){
        return res.data;
    }
    return res;
    },error=>{
        throw error;
});

module.exports = { port, mockup_api , axiosServer};