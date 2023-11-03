import { PaginationRequest } from "../../interfaces/request/PaginationRequestDto";

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SAGA = "GET_POSTS_SAGA";

export function getAllPosts(pagination: PaginationRequest) {
    return {
        type: GET_POSTS_SAGA,
        pagination
    };
}