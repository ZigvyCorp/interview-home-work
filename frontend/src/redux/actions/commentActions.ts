import { Comment, CreateComment } from "../../types/Comment/types";
import { CREATE_COMMENT, CREATE_COMMENT_FAILURE, CREATE_COMMENT_SUCCESS, GET_COMMENT, GET_COMMENT_FAILURE, GET_COMMENT_SUCCESS } from "./actions";

export const getComment = (postId: number) => ({
    type: GET_COMMENT,
    payload: postId
})

export const getCommentSuccess = ({postId, comments}: { postId: number, comments: Comment[]}) => ({
    type: GET_COMMENT_SUCCESS,
    payload: {
        postId,
        comments
    }
})

export const getCommentFailure = () => ({
    type: GET_COMMENT_FAILURE
})

export const createComment = (postId: number, body: CreateComment) => ({
    type: CREATE_COMMENT,
    payload: {
        postId,
        body
    }
})

export const createCommentSuccess = (comment: Comment) => ({
    type: CREATE_COMMENT_SUCCESS,
    payload: comment
})

export const createCommentFailure = () => ({
    type: CREATE_COMMENT_FAILURE,
})



export type CommentAction =
  | ReturnType<typeof getComment>
  | ReturnType<typeof getCommentSuccess>
  | ReturnType<typeof getCommentFailure>
  | ReturnType<typeof createComment>
  | ReturnType<typeof createCommentSuccess>
  | ReturnType<typeof createCommentFailure>;