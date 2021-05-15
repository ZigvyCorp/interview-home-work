import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com'

export const fetchPosts = () => axios.get(`${URL}/posts`)
export const fetchUsers = () => axios.get(`${URL}/users`)
export const fetchCommentsPost = payload =>
    axios.get(`${URL}/comments?postId=` + payload)
// export const createPost = payload => axios.post(`${URL}/posts`, payload)
// export const updatePost = payload => axios.post(`${URL}/posts/update`, payload)
