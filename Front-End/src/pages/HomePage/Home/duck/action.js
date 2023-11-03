import api from '../../../../utils/apiUtils';
import * as ActionType from './types';

export const actGetPaging = (page, keyword) => {
    return (dispatch) => {
        console.log(keyword)
        dispatch(actGetPagingRequest())
        keyword ? api.get(`api/post/getpaging/1?keyword=${keyword}`)
            .then((result) => {
                dispatch(actGetPagingSuccess(result.data))
            })
            .catch((error) => {
                dispatch(actGetPagingFail(error))
            }) : api.get(`api/post/getpaging/${page}`)
            .then((result) => {
                dispatch(actGetPagingSuccess(result.data))
            })
            .catch((error) => {
                dispatch(actGetPagingFail(error))
            })
    };
};

export const actGetPagingRequest = () => {
    return {
        type: ActionType.GETPAGING_REQUEST,
    }
};

export const actGetPagingSuccess = (data) => {
    return {
        type: ActionType.GETPAGING_SUCCESS,
        payload: data
    }
};

export const actGetPagingFail = (error) => {
    return {
        type: ActionType.GETPAGING_FAIL,
        payload: error
    }
};