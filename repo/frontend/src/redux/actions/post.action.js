import axiosClient from '../../services/axios-client';
import postTypes from "../types/post.types";

export const fetchPosts = (params) => ({ type: postTypes.FETCH_POSTS_REQUEST, payload: params });
export const fetchPost = (params) => ({ type: postTypes.FETCH_POST_REQUEST, payload: params })
