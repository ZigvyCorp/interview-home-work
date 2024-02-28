import axios from 'axios';

const BASE_URL = `http://localhost:8000/api/v1`;
const axiosClient = axios.create({
    baseURL: BASE_URL
});

axiosClient.interceptors.response.use((res) => {
    return res.data.data;
}, (err) => {
    console.log("Fetch API error!", err);
    return Promise.reject(err);
});

export default axiosClient;