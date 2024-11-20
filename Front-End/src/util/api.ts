import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL, //YOUR_API_URL HERE
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(async (req: any) => {
    const originalRequest = req;

    const token = localStorage.getItem("token");
    if (token) {
        originalRequest.headers.Authorization = "Bearer " + token;
        return Promise.resolve(originalRequest);
    }

    return req;
});