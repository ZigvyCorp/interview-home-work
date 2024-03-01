import { apiGetPostComments } from "../../services/postService";
import { apiGetComments } from "../../services/commentService"
import actionTypes from "./actionTypes";

export const getComments = () => async (dispatch) => {
    try {
        const response = await apiGetComments();
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_COMMENTS,
                comments: response.data.data,
                isLoading: true,
            });
        } else {
            dispatch({
                type: actionTypes.GET_COMMENTS,
                msg: response.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_COMMENTS,
            comments: null,
        });
    }
}

export const getPostComments = (id) => async (dispatch) => {
    try {
        const response = await apiGetPostComments(id);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_COMMENTS_BY_POST_ID,
                comments: response.data.data,
                isLoading: true,
            });
        } else {
            dispatch({
                type: actionTypes.GET_COMMENTS_BY_POST_ID,
                msg: response.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_COMMENTS_BY_POST_ID,
            comments: null,
        });
    }
}