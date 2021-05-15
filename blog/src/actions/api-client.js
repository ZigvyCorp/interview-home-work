import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com"

const getPosts = (params) => {
    return axios.get(`${BASE_URL}/posts`, {
        params,
    })
}

const getPost = (id) => {
    return axios.get(`${BASE_URL}/posts/${id}`)
}

const getPostComments = (id) => {
    return axios.get(`${BASE_URL}/posts/${id}/comments`)
}


export {
    getPosts,
    getPost,
    getPostComments
};