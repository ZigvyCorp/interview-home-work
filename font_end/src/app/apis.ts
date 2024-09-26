import axios from 'axios';

const VITE_API = import.meta.env.VITE_API;

export function getPosts(currentIndex: number) {
    return axios
        .get(`${VITE_API}/posts/more?current=${currentIndex}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
}

export function getComments() {
    return axios
        .get(`${VITE_API}/comments`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
}

export function getUsers() {
    return axios
        .get(`${VITE_API}/users`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
}
