import { getAsync } from "../core/utils/http-client";


const commentUrl = "https://jsonplaceholder.typicode.com/comments"

export const getCommentsAsync = () => {
    return getAsync(commentUrl)
}