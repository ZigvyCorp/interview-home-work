import axios, { AxiosError, AxiosResponse } from 'axios';

const axiosClient = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api`,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response: AxiosResponse) {
        return response;
    },
    function (error: AxiosError) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        // 401, 403, 500
        return Promise.reject(error.response?.data); // should be error response body
    }
);

export default axiosClient;
