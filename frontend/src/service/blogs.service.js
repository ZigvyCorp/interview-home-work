import { getAsync } from "../core/utils/http-client";


const postsUrl = "https://jsonplaceholder.typicode.com/posts"

export const getPostsAsync = () => {
    return getAsync(postsUrl)
}

export const getPostDetailAsync = (id) => {
    const url = postsUrl + "/" + id;
    return getAsync(url)
}