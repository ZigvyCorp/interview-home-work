import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import get from 'lodash/get'
import config from '../configs/frontend.cfg';

class Http {
    instance: AxiosInstance
    constructor() {
        this.instance = axios.create({
            baseURL: config.originBackendURL,
            timeout: 60000,
        })
    }

    private _handleError(error: AxiosError<{ error?: { message: string; errorData: string } }>) {
        return Promise.reject({
            systemMessage: error.message,
            code: error.response?.status,
            isForbidden: error.response?.status === 403,
            description: get(error, 'response.data.error.errorData'),
            message: 'error message',
        });
    }

    get(path: string, config?: AxiosRequestConfig) {
        return this.instance
            .get(path, {
                // params: {
                //   language: DEFAULT_LANGUAGE,
                //   api_key: API_KEY,
                // },
                ...config,
            })
            .catch(this._handleError);
    }

    post(path: string, data?: any, config?: AxiosRequestConfig) {
        return this.instance
            .post(path, data, {
                params: {
                    // language: DEFAULT_LANGUAGE,
                    // api_key: API_KEY,
                },
                ...config,
            })
            .catch(this._handleError);
    }

    put(path: string, data?: any, config?: AxiosRequestConfig) {
        return this.instance
            .put(path, data, {
                params: {
                    // language: DEFAULT_LANGUAGE,
                    // api_key: API_KEY,
                },
                ...config,
            })
            .catch(this._handleError);
    }

    patch(path: string, data?: any, config?: AxiosRequestConfig) {
        return this.instance
            .patch(path, data, {
                params: {
                    // language: DEFAULT_LANGUAGE,
                    // api_key: API_KEY,
                },
                ...config,
            })
            .catch(this._handleError);
    }

    delete(path: string, config?: AxiosRequestConfig) {
        return this.instance
            .delete(path, {
                params: {
                    // language: DEFAULT_LANGUAGE,
                    // api_key: API_KEY,
                },
                ...config,
            })
            .catch(this._handleError);
    }
}

const http = new Http().instance;

export default http