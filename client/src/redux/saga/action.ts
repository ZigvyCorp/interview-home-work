import axios, { AxiosInstance } from "axios"
// export const URL_SVC = 'https://jsonplaceholder.typicode.com/'
export const URL_SVC = 'http://localhost:3000/'
export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
export const GET_USERS = 'GET_USERS'
export const GET_USER = 'GET_USER'
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'

export const GLOBAL_LOADING = 'GLOBAL_LOADING'


class HTTP {
    instance: AxiosInstance
    constructor() {
        this.instance = axios.create({
            baseURL: URL_SVC,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        });
    }
}

export const http = new HTTP().instance
