import { GET_LIST_POST, GET_LIST_POST_SUCCESS , GET_POST,GET_POST_SUCCESS} from './postConstant';

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
export const getPost = (payload) => {
    return {
        type: GET_POST,
        payload,
    };
};

export const getPostSuccess = (payload) => {
    return {
        type: GET_POST_SUCCESS,
        payload,
    };
};
