import axios from 'axios';
const url = 'http://localhost:8080/'
export const callAPIGetPosts = async (params) => {
    try {
        const response = await axios({
            url: url + 'posts',
            method: 'GET',
            params,
            headers: 'application/json;charset=utf8'
        })
        return response.data
    } catch (error) {
        throw error.response.data.status
    }
}
export const callAPIGetComments = async (params) => {
    try {
        const response = await axios({
            url: url + 'comments',
            method: 'GET',
            params,
            headers: 'application/json;charset=utf8'
        })
        return response.data
    } catch (error) {
        throw error.response.data.status
    }
}
export const callAPILogin = async (data) => {
    try {
        const response = await axios({
            url: url + 'users/login',
            method: 'POST',
            data: data,
            headers: 'application/json;charset=utf8'
        })
        return response.data
    } catch (error) {
        throw error.response.data.status
    }
}
export const callAPISignup = async (data) => {
    try {
        const response = await axios({
            url: url + 'users/signup',
            method: 'POST',
            data: data,
            headers: 'application/json;charset=utf8'
        })
        return response.data
    } catch (error) {
        throw error.response.data.status
    }
}