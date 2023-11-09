import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

export type ErrorResponseType = {
  error: string;
  message: string;
  statusCode: number;
};

const ErrorResponseDefault: ErrorResponseType = {
  error: 'Unknown',
  message: 'Something went wrong, please try again later',
  statusCode: 500,
};

export interface IResponseApi<K>  {
  error?: ErrorResponseType;
  data?: K;
  status: number;
}
const request = async <T, K>(
  url: string,
  options?: AxiosRequestConfig<T>,
): Promise<IResponseApi<K>> => {
  const headers = {
    'Content-Type': 'application/json',
  };

  return axios({
    ...options,
    url,
    headers: { ...headers, ...options?.headers },
  })
    .then((res: AxiosResponse<K>) => {
      return Promise.resolve({ data: res.data, status: res.status });
    })
    .catch((err: AxiosError<ErrorResponseType>) => {
      const error: ErrorResponseType = {
        message: Array.isArray(err.response?.data?.message) ? err.response?.data.message[0] : err.response?.data.message || ErrorResponseDefault.message,
        statusCode: err.response?.data?.statusCode || ErrorResponseDefault.statusCode,
        error: err.response?.data?.error || ErrorResponseDefault.error,
      };

      return Promise.resolve({
        error,
        status: err.response?.status || 404,
      });
    });
};

export { request };