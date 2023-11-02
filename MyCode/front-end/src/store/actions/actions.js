import { getComments } from "../../services/commentService";
import { getPosts } from "../../services/postService";
import actionTypes from "./actionTypes";
export let fetchPosts = () => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_POSTS_REQUEST });
        try {
            const data = await getPosts();

            dispatch({
                type: actionTypes.FETCH_POSTS_SUCCESS,
                payload: data
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.FETCH_POSTS_FAILURE,
                payload: error.message
            });
        }

    };
}
export let fetchComments = (postId) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_COMMENT_REQUEST });
        try {
            const data = await getComments(postId);
            dispatch({
                type: actionTypes.FETCH_COMMENT_SUCCESS,
                payload: data
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.FETCH_COMMENT_FAILURE,
                payload: error.message
            });
        }

    };
}