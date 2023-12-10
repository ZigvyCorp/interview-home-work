import axios from 'axios';
import { BASE_URL } from '../constant/data';

const axiosService = axios.create({
    baseURL: BASE_URL,
});
axiosService.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
axiosService.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error.response.data);
    },
);
export default axiosService;