import axios from 'axios';
import { BASE_URL } from '../config';
import { getToken } from '../utils/token';

const axiosInstance = axios.create({
    baseURL: `${BASE_URL}`
});

axiosInstance.interceptors.request.use((config) => {
    config.headers['Authorization'] = `Bearer ${getToken()}`;
    return config;
});

axiosInstance.interceptors.response.use(
    (res) => res,
    (err) =>
        Promise.reject(
            (err.response && err.response.data) || 'Something went wrong'
        )
);

export default axiosInstance;