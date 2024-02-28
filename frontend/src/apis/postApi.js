import axiosClient from "./axiosClient";

const postApi = {
    getPosts({ page = 1, limit = 10, ...restParams }) {
        const url = "/posts";
        return axiosClient.get(url, {
            params: {
                page,
                limit,
                ...restParams
            }
        });
    },
    getPost(id) {
        const url = `/posts/${id}`;
        return axiosClient.get(url);
    }
};

export default postApi;