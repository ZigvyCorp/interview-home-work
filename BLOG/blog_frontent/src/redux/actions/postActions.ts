import { PostType } from "types/postType";
import { GET_POST, GET_POST_FAILURE, GET_POST_SUCCESS, } from "constants/actionRedux";

export const getPost = ({ postId }: { postId: string }) => ({
    type: GET_POST,
    payload: {
        postId
    }
})

export const getPostSucces = (post: PostType) => ({
    type: GET_POST_SUCCESS,
    payload: post
})

export const getPostFailure = () => ({
    type: GET_POST_FAILURE
})

export type PostAction =
    | ReturnType<typeof getPost>
    | ReturnType<typeof getPostSucces>
    | ReturnType<typeof getPostFailure>

