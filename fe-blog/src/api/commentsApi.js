import axiosClient from "./axiosClient";

class CommentApi {
    constructor() {
        this.resource = '/comments'
    }

    all() {
        return axiosClient.get(`${this.resource}`)
    }

    show(id) {
        return axiosClient.get(`${this.resource}/${id}`)
    }

}

export default CommentApi;