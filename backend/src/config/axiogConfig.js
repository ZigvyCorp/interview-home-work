import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`
})

axiosClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    console.log(error);
})
export default axiosClient