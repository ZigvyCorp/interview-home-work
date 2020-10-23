import { handleActions } from 'redux-actions';
import { getPosts, getPostsSuccess, getPostsFail } from './actions';
import initialState from './state';

export const reducer = handleActions(
  {
    [getPosts]: (state: any, action: any) => {
      return {
        ...state,
        action: action.type,
        loading: true,
        error: null,
      };
    },

    [getPostsSuccess]: (state: any, action: any) => {
      return {
        ...state,
        data: action.payload,
        action: action.type,
        error: null,
        loading: false,
      };
    },
    [getPostsFail]: (state: any, action: any) => ({
      ...state,
      error: action.payload,
      action: action.type,
      loading: false,
    }),
  } as any,
  initialState
);
