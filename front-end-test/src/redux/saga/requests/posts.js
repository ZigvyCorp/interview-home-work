import axios from 'axios'

export const requestGetPosts = () => {
    return axios.request({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts'
    })
}

export const requestGetComments = (postId) => {
    return axios.request({
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    })
}

export const requestGetAuthor = (userId) => {
    return axios.request({
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/users/${userId}`
    })
}