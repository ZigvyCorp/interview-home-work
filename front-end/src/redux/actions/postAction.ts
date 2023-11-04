import { PostActionPayload } from "../../interfaces/ReduxPayload";

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SAGA = "GET_POSTS_SAGA";

export function getAllPosts(payload: PostActionPayload) {
    return {
        type: GET_POSTS_SAGA,
        payload
    };
}