import * as type from "../constants/postContant";

const initialState = {
  post: {},
  posts: [],
  currentPage: 1,
  numberOfPages: 1,
  isLoading: true,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.START_LOADING: {
      return { ...state, isLoading: true };
    }

    case type.END_LOADING: {
      return { ...state, isLoading: false };
    }

    case type.FETCH_POST: {
      return {
        ...state,
        post: action.payload.data,
      };
    }

    case type.FETCH_ALL: {
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.totalPage,
      };
    }

    case type.FETCH_BY_SEARCH: {
      return { ...state, posts: action.payload.data };
    }

    case type.CREATE: {
      return { ...state, posts: [...state.posts, action.payload] };
    }

    case type.UPDATE:
    case type.LIKE: {
      const arr = [...state.posts];
      const index = arr.findIndex((p) => p._id === action.payload._id);

      if (index !== -1) {
        arr[index] = action.payload;
      }

      return { ...state, posts: arr };
    }

    case type.DELETE: {
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default postReducer;
