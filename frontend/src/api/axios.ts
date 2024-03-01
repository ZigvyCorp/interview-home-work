import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { TApiResponse } from "types/api";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/'
});

axiosInstance.interceptors.request.use(
    function (config: InternalAxiosRequestConfig) {
        return config;
    },
    function (e: AxiosError) {
        console.log(e)
    }
)

axiosInstance.interceptors.response.use(
    function (res: AxiosResponse<TApiResponse>) {
        const { data, statusText, status } = res

        res.data = {
            data: data ? data.data : null,
            total: data ? data.total : 0,
            message: statusText,
            statusCode: status
        }
        return res
    },
    async function (e: AxiosError<TApiResponse>) {
        const { response } = e

        if (response) {
            const { statusText: message, status: statusCode } = response
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