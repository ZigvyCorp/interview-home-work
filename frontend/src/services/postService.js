import axiosClient from "../axiogConfig";


export const apiGetPosts = (page, limit, query) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosClient.get(`/posts`, {
            params: {
                page,
                limit,
                q: query
            }
        });
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPostById = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosClient.get(`/posts/${id}`);
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPostComments = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosClient.get(`/posts/${id}/comments`);
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
