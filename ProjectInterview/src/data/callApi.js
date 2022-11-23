import axios from 'axios';

export const getPostList =() => {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
};

export const getUserList =() => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
};

export const getCommentList =() => {
    return axios.get('https://jsonplaceholder.typicode.com/comments');
};

export const getDetailPost =(idPost) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
};

export const getCommentDetailPost=(idPost) => {
    return axios.get(`https://jsonplaceholder.typicode.com/post/${idPost}/comments`);
};