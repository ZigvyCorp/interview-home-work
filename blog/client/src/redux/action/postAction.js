import { GET_COMMENT, GET_COMMENT_SUCCESS, GET_COMMENT_WITH_ID, GET_COMMENT_WITH_ID_SUCCESS, GET_POST, GET_POST_DETAIL, GET_POST_DETAIL_SUCCESS, GET_POST_SUCCESS, GET_USER, GET_USER_SUCCESS } from "../type/postType"

export const getPostWithID = (id)=>{
    return {
        type:GET_POST,
        payload:id
    }
}
export const getPostSuccess = (payload)=>{
    return {
        type:GET_POST_SUCCESS,
        payload
    }
}
export const getPostDetail= (id)=>{
    return {
        type:GET_POST_DETAIL,
        payload:id
    }
}
export const getPostDetailSuccess = (payload)=>{
    return {
        type:GET_POST_DETAIL_SUCCESS,
        payload
    }
}
export const getUsers = ()=>{
    return {
        type:GET_USER,
        payload:{}
    }
}
export const getUsersSuccess = (payload)=>{
    console.log(payload);
    return {
        type:GET_USER_SUCCESS,
        payload
    }
}

export const getComments = ()=>{
    return {
        type:GET_COMMENT,
        payload:{}
    }
}
export const getCommentsSuccess = (payload)=>{
    console.log(payload)
    return {
        type:GET_COMMENT_SUCCESS,
        payload
    }
}