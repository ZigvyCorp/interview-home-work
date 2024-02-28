import axiosClient from "./axiosClient";

const userApi = {
    getUsers() {
        const url = '/users';
        return axiosClient.get(url);
    }
};

export default userApi;