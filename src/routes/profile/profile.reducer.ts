import {
  ACTION_POSTS_FETCHED,
  ACTION_POSTS_FETCH_FAIL,
  ACTION_POSTS_FETCH,
  ACTION_REMOVE_POST,
  ACTION_REMOVE_POST_FETCHED
} from "./profile.constant";

interface IReducer {
  posts: {
    isFetching: boolean;
    isFetched: boolean;
    data: any[];
    error: {
      type: string;
      content: string;
    };
  };
}

const initialState: IReducer = {
  posts: {
    isFetched: false,
    isFetching: true,
    data: [],
    error: {
      type: "",
      content: ""
    }
  }
};

export default (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case ACTION_POSTS_FETCHED: {
      return {
        ...state,
        posts: {
          ...state.posts,
          isFetched: true,
          isFetching: false,
          data: [...action.payload]
        }
      };
    }
    case ACTION_POSTS_FETCH_FAIL: {
      return {
        ...state,
        posts: {
          ...state.posts,
          isFetched: true,
          isFetching: false
        }
      };
    }
    case ACTION_REMOVE_POST_FETCHED: {
      return {
        ...state,
        posts: {
          ...state.posts,
          data: [...action.payload]
        }
      };
    }
    default:
      return state;
  }
};
