import axiosClient from "./axiosClient";

const userApi = {
    getAll(params) {
        const url = "/users";
        return axiosClient.get(url, { params });
    },
    getById(id) {
        const url = `/users/${id}`;
        return axiosClient.get(url);
    },
};
export default userApi;
