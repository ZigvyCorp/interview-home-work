import { API } from "../axios.config";

export const getAll = async () => await API.get("/posts");
export const getCommentsFromPost = async (postID) =>
    await API.get(`/posts/${postID}/comments`);
