import axios from "axios";

export function requestFetchPosts() {
     return axios.get('https://jsonplaceholder.typicode.com/posts')
}

export function requestFetchComments() {
    return axios.get('https://jsonplaceholder.typicode.com/comments')
}

export function requestFetchUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

export function requestFetchPostDetail(id) {
    return axios.get('https://jsonplaceholder.typicode.com/posts?id=' + id)
}

export function requestFetchCommentPostDetail(id) {
    return axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
}