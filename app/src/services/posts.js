import axiosInstance from "./axiosInstance";

export function getListPost(skip = 0, search = '') {
    return axiosInstance.get("posts", {
        params: { skip, search }
    }).then((res => {
        return res.data
    })).catch(err => {
        console.log(err)
    })
}

export function getPost(id) {
    return axiosInstance.get(`posts/${id}`).then((res => {
        return res.data
    })).catch(err => {
        console.log(err)
    })
}