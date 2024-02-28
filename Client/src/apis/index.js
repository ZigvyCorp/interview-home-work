import { LocalStore } from '../utils/helpers/local.js';
import axios from 'axios';
import { apiPost } from './post.js';
import { apiUser } from 'src/apis/user.js';
import { apiComment } from 'src/apis/comment.js';
import { apiAuth } from './auth.js';

const { get } = LocalStore

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_KEY,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.request.use((config) => {
        const accessToken = get('access_token', true)
        if (accessToken) {
            config.headers.Authorization = accessToken
        }
        return config
    },
    (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use((response) => response.data, (error) => Promise.reject(error))

export const API_URL_APP = {
    posts: apiPost,
    users: apiUser,
    comments: apiComment,
    auth: apiAuth
}
export default axiosInstance
