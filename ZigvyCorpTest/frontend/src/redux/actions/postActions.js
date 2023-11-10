import { postConsts } from '../constants';
import { useSelector } from 'react-redux';

export const getListPostActionRequest = (payload) => {
    return {
        type: postConsts.GET_LIST_POST_REQUEST,
        payload,
    };
};
export const getListPostActionSuccess = (payload) => {
    return {
        type: postConsts.GET_LIST_POST_SUCCESS,
        payload,
    };
};
export const getListPostActionFail = (payload) => {
    return {
        type: postConsts.GET_LIST_POST_FAIL,
        payload,
    };
};

export const getCommentsInPostActionRequest = (payload) => {
    return {
        type: postConsts.GET_COMMENTS_IN_POST_REQUEST,
        payload,
    };
};
export const getCommentsInPostActionSuccess = (payload) => {
    return {
        type: postConsts.GET_COMMENTS_IN_POST_SUCCESS,
        payload,
    };
};
export const getCommentsInPostActionFail = (payload) => {
    return {
        type: postConsts.GET_COMMENTS_IN_POST_FAIL,
        payload,
    };
};
//
export const searchPostActionRequest = (payload) => {
    return {
        type: postConsts.SEARCH_POST_REQUEST,
        payload,
    };
};
export const searchPostActionSuccess = (payload) => {
    return {
        type: postConsts.SEARCH_POST_SUCCESS,
        payload,
    };
};
export const searchPostActionFail = (payload) => {
    return {
        type: postConsts.SEARCH_POST_FAIL,
        payload,
    };
};
