import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
})

axiosClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    console.log(error);
})
export default axiosClient