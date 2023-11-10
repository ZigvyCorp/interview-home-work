import { DEFAULT_PER_PAGE } from '../../config';
import { CLOSE_MODAL, CREATE_POST_FAILURE, CREATE_POST_SUCCESS, GET_POSTS, GET_POSTS_FAILURE, GET_POSTS_SUCCESS, LOAD_MORE_POST, OPEN_MODAL } from './actionTypes';

const initialState = {
    posts: {
        list: [],
        perPage: DEFAULT_PER_PAGE,
        currentPage: 0,
        totalItems: 0,
        totalPages: 0
    },
    isOpenModal: false,
    isLoadMore: false
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    list: action.payload.currentPage === 1
                        ? action.payload.posts
                        : [...state.posts.list, ...action.payload.posts],
                    perPage: action.payload.perPage,
                    currentPage: action.payload.currentPage,
                    totalPages: action.payload.totalPages,
                    totalItems: action.payload.totalItems
                },
                isLoadMore: false
            };
        case GET_POSTS_FAILURE:
            return {
                ...state,
            };
        case OPEN_MODAL:
            return {
                ...state,
                isOpenModal: true
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isOpenModal: false
            };
        case CREATE_POST_SUCCESS: {
            return {
                ...state,
                isOpenModal: false,
                posts: {
                    ...state.posts,
                    list: [action.payload, ...state.posts.list]
                }
            };
        }
        case CREATE_POST_FAILURE: {
            return {
                ...state,
                isOpenModal: false
            };
        }
        case LOAD_MORE_POST: {
            return {
                ...state,
                isLoadMore: true
            };
        }
        default:
            return state;
    }
};

export default postReducer;