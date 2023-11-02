import axios from "../axios";
export let getPosts = () => {
    return axios.get('/api/posts')
}
