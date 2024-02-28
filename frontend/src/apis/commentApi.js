import axiosClient from "./axiosClient";

const commentApi = {
    getComments() {
        const url = '/comments';
        return axiosClient.get(url);
    }
};

export default commentApi;