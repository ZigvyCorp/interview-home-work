import { GET_LIST_POST, GET_LIST_POST_SUCCESS } from './commentConstant';

export const getListPost = (payload) => {
    return {
        type: GET_LIST_POST,
        payload,
    };
};

export const getListPostSuccess = (payload) => {
    return {
        type: GET_LIST_POST_SUCCESS,
        payload,
    };
};
