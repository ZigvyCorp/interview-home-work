import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { MOCK_API_URL } from "./constant";
import http from 'http';
import https from 'https';

export interface TApiResponse<T = unknown> {
    data: T | null;
    total: number;
    message?: string;
    statusCode?: number
}

export const axiosInstance = axios.create({
    baseURL: MOCK_API_URL,
    timeout: 5 * 60 * 1000,
    httpsAgent: new https.Agent({
        maxSockets: 160,
        maxFreeSockets: 160,
        timeout: 60000,
        keepAliveMsecs: 60000,
    }),
    httpAgent: new http.Agent({
        maxSockets: 160,
        maxFreeSockets: 160,
        timeout: 60000,
        keepAliveMsecs: 60000,
    })
});

axiosInstance.interceptors.request.use(
    async function (config: InternalAxiosRequestConfig) {
        return config;
    },
    function (e: AxiosError) {
        console.log(e)
    }
);

axiosInstance.interceptors.response.use(
    function (res: AxiosResponse<TApiResponse>) {
        const { data, statusText, status, headers } = res

        res.data = {
            data,
            total: headers["x-total-count"],
            message: statusText,
            statusCode: status
        }
        return res
    },
    async function (e: AxiosError<TApiResponse>) {
        const { response } = e

        if (response) {
            const { data: { message, statusCode } } = response
            return {
                data: {
                    data: null,
                    message,
                    statusCode
                }
            }
        }
        return {
            data: {
                data: null,
                message: 'Internal Server Error',
                statusCode: 500
            }
        }
    },
);