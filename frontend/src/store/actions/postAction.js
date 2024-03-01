import { apiGetPosts, apiGetPostById } from "../../services/postService";
import actionTypes from "./actionTypes";

export const getPosts = (page = 1, limit = 5, query) => async (dispatch) => {
    try {
        const response = await apiGetPosts(page, limit, query);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS,
                posts: response.data.data,
                totalPages: response.data.totalPages,
                isLoading: true,
            });
        } else {
            dispatch({
                type: actionTypes.GET_POSTS,
                msg: response.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS,
            posts: null,
        });
    }
};

export const getPostById = (id) => async (dispatch) => {
    try {
        const response = await apiGetPostById(id);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS_BY_ID,
                posts: response.data.data,
                totalPages: 0,
                isLoading: true,
            });
        } else {
            dispatch({
                type: actionTypes.GET_POSTS_BY_ID,
                posts: null,
                msg: response.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_BY_ID,
            post: null,
        });
    }
};
