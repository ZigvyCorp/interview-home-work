import axiosClient from "./axiosClient";

const postApi = {
    getAll(params) {
        const url = "/posts";
        return axiosClient.get(url, { params });
    },
    getById(id) {
        const url = `/posts/${id}`;
        return axiosClient.get(url);
    },
};
export default postApi;
