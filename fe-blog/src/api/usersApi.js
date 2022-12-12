import axiosClient from "./axiosClient";


class UsersApi {
    constructor() {
        this.resource = '/users'
    }

    all() {
        return axiosClient.get(`${this.resource}`)
    }

    detail(id) {
        return axiosClient.get(`${this.resource}/${id}`)
    }

}

export default UsersApi;