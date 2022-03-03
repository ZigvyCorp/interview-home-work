import {GET_ALL_POSTS,
    GET_POST_BY_ID,
    GET_COMMENT_OF_POST,
    GET_ALL_POSTS_SUCCESS,
    GET_POST_BY_ID_SUCCESS,
    GET_COMMENT_OF_POST_SUCCESS} from './actionCreator';

export const getPosts = () =>{
    return {
        type:GET_ALL_POSTS,
        payload: []
    }
}

export const getPostsSuccess = (posts) =>{
    return {
        type:GET_ALL_POSTS_SUCCESS,
        payload: posts 
    }
}


export const getPostById = (id) =>{
    return {
        type:GET_POST_BY_ID,
        payload: id 
    }
}

export const getPostByIdSuccess = (post) =>{
    return {
        type:GET_POST_BY_ID_SUCCESS,
        payload: post 
    }
}

export const getCommentOfPost = (id) =>{
    return {
        type:GET_COMMENT_OF_POST,
        payload: id 
    }
}


export const getCommentOfPostSuccess = (comments) =>{
    return {
        type:GET_COMMENT_OF_POST_SUCCESS,
        payload: comments 
    }
}

