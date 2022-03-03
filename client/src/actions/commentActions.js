import {GET_ALL_COMMENTS,GET_ALL_COMMENTS_SUCCESS,GET_COMMENT_BY_POST,GET_COMMENT_BY_POST_SUCCESS} from './actionCreator';

export const getComments = () =>{
    return {
        type:GET_ALL_COMMENTS,
        payload: [] 
    }
}

export const getCommentsSuccess = (cmt) =>{
    return {
        type:GET_ALL_COMMENTS_SUCCESS,
        payload: cmt 
    }
}

export const getCommentByPost = (id) =>{
    return {
        type:GET_COMMENT_BY_POST,
        payload:id
    }
}

export const getCommentByPostSuccess = (cmt) =>{
    return {
        type:GET_COMMENT_BY_POST_SUCCESS,
        payload: cmt 
    }
}