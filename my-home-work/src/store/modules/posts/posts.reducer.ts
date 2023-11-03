import { LIMIT_POSTS } from "src/constant/app.constant";
import { Actions, IPostsState, Types } from "./posts.constant";

const initialState: IPostsState = {
  data: [],
  firstLoad: true,
  loading: true,
  error: null,
  params: {
    page: 1,
    limit: LIMIT_POSTS,
    search: "",
  },
};
const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case Types.LOAD_POSTS:
      return { ...state, loading: true, error: null };
    case Types.SET_POSTS:
      return {
        ...state,
        data: action.payload.posts,
        loading: false,
        error: null,
        firstLoad: false,
      };
    case Types.SET_POSTS_PARAMS:
      return {
        ...state,
        params: {
          page: action.payload.page,
          search: action.payload.search,
        },
      };

    case Types.SET_POSTS_ERROR:
      return {
        ...state,
        error: action.payload.msg,
        loading: false,
        firstLoad: false,
      };
    default:
      return state;
  }
};

export { initialState, reducer as default };
