import { postConsts } from '../constants';

const postInitState = {
    loading: false,
    error: false,
    commentLoading: false,
    commentsData: [],
    listPost: {},
};

const postReducers = (state = postInitState, action) => {
    switch (action.type) {
        case postConsts.GET_LIST_POST_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case postConsts.GET_LIST_POST_SUCCESS: {
            return {
                ...state,
                loading: false,
                listPost: action.payload,
            };
        }
        case postConsts.GET_LIST_POST_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case postConsts.GET_COMMENTS_IN_POST_REQUEST: {
            return {
                ...state,
                commentLoading: true,
            };
        }
        case postConsts.GET_COMMENTS_IN_POST_SUCCESS: {
            return {
                ...state,
                commentLoading: false,
                // commentsData: action.payload,
                commentsData: [...state.commentsData, ...action.payload],
            };
        }
        case postConsts.GET_COMMENTS_IN_POST_FAIL: {
            return {
                ...state,
                commentLoading: false,
                error: action.payload,
            };
        }
        case postConsts.SEARCH_POST_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case postConsts.SEARCH_POST_SUCCESS: {
            return {
                ...state,
                loading: false,
                listPost: action.payload,
            };
        }
        case postConsts.SEARCH_POST_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default postReducers;
