import axios from "../axios";

export let getComments = (postId) => {
    return axios.get('/api/comments?postId=' + postId)
}