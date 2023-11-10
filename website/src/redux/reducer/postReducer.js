import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAIL,
  FETCH_POSTS_LOADING,
  FILTER_POSTS_SUCCESS,
  FILTER_POSTS_FAIL,
} from '../action/postAction';

const initialState = {
  state: 'loading',
  page: 0,
  data: [],
  tempData: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_LOADING: {
      return {
        ...state,
        state: 'loading',
      };
    }
    case FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        state: 'success',
        data: action.data,
        tempData: action.data,
      };
    }
    case FETCH_POSTS_FAIL: {
      return {
        ...state,
        state: 'fail',
        data: [],
        tempData: [],
      };
    }
    case FILTER_POSTS_SUCCESS: {
      return {
        ...state,
        state: 'success',
        tempData: action.tempData,
      };
    }
    case FILTER_POSTS_FAIL: {
      return {
        ...state,
        state: 'fail',
      };
    }
    default: {
      return state;
    }
  }
}
