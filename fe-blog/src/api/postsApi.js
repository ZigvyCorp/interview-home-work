import axiosClient from "./axiosClient";


class PostsApi {
    constructor() {
        this.resource = '/posts'
    }

    all() {
        return axiosClient.get(`${this.resource}`)
    }

    show(id) {
        return axiosClient.get(`${this.resource}/${id}`)
    }

    getComments(id) {
        return axiosClient.get(`${this.resource}/${id}/comments`)
    }

}

export default PostsApi;