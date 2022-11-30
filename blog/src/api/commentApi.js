import axiosClient from "./axiosClient";

const commentApi = {
    getAll(params) {
        const url = "/comments";
        return axiosClient.get(url, { params });
    },
    getById(id) {
        const url = `/comments/${id}`;
        return axiosClient.get(url);
    },
    getCommentsOfPost(idPost) {
        const url = `/post/${idPost}/comments`;
        return axiosClient.get(url);
    },
};
export default commentApi;
