import axios from 'axios'

const url = 'http://localhost:8080/api/'

export const apiInstance = axios.create(
    {
        baseURL: url
    }
)

apiInstance.interceptors.request.use((config) => {

    return config
}, (err) => Promise.reject(err))

