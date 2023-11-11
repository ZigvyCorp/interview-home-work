import { getDefaultPaging } from '../../utils/getPaging';
import { CLOSE_MODAL, CREATE_POST_FAILURE, CREATE_POST_SUCCESS, FETCH_POST, GET_POSTS, GET_POSTS_FAILURE, GET_POSTS_SUCCESS, INCREASE_COMMENT_COUNT, LOAD_MORE_POST, OPEN_MODAL } from './actionTypes';

const initialState = {
    posts: getDefaultPaging(),
    isOpenModal: false,
    isLoadMore: false,
    isFetching: false
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST:
            return {
                ...state,
                isFetching: true
            };
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
                isFetching: false,
                isLoadMore: false,
            };
        case GET_POSTS_FAILURE:
            return {
                ...state,
                isFetching: false
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
        case INCREASE_COMMENT_COUNT: {
            let newList = state.posts.list.map(item => ({ ...item, comments_count: (item._id === action.payload) ? item.comments_count + 1 : item.comments_count }));
            return {
                ...state,
                posts: {
                    ...state.posts,
                    list: newList
                }
            };
        }
        default:
            return state;
    }
};

export default postReducer;