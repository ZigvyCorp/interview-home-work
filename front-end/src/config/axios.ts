import axios, { AxiosError, AxiosHeaders } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-hot-toast';

export const API = axios.create({
    baseURL: `${process.env.API_ENDPOINT}/api`,
});

API.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log(`*********** AxiosError ***********`, error);

        if (!error.response) {
            return Promise.reject(error);
        }
        if ((error as AxiosError).response?.status === StatusCodes.FORBIDDEN) {
            toast.error('Please logout and then Login again!');
        }
        if (error.response?.status >= 400 && error.response?.status < 500) {
            const errorMessage = error.response?.data?.errorMessage;
            return Promise.reject(new Error(JSON.stringify(errorMessage)) || error);
        }
        return Promise.reject((error as AxiosError).response?.data);
    },
);

API.interceptors.request.use(
    (config) => {
        let requireAuth = false;
        if (config.headers && config.headers['require-auth']) {
            requireAuth = true;
        }
        const token = 'Token';
        config.headers.Authorization = requireAuth ? `token||${token}` : process.env.NEXT_PUBLIC_HARD_TOKEN;
        config.headers = {
            ...config.headers,
        } as unknown as AxiosHeaders;

        return config;
    },
    (error) => {
        console.warn(`*********** error: interceptors.request ***********`, error);
    },
);

API.defaults.headers.common['Authorization'] = 'hello';
