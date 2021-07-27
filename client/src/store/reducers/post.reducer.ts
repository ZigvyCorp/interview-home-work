import { PostType } from "../../types";
import { ActionRedux } from "../../types/redux.type";
import { SET_COMMENT, SET_LOADING, SET_POST, SET_POSTS } from "../types";

interface StatePostInterface {
  posts: PostType[];
  post?: PostType;
  total: number;
  loading: boolean;
}
const initStatePost: StatePostInterface = {
  posts: [],
  total: 0,
  post: undefined,
  loading: false,
};
export default (state = initStatePost, { payload, type }: ActionRedux) => {
  switch (type) {
    case SET_POSTS:
      return { ...state, posts: payload };
    case SET_POST:
      return { ...state, ...payload };
    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_COMMENT:
      return {
        ...state,
        posts: state.posts.map((item) =>
          item._id === payload.id ? { ...item, comments: [...item.comments, payload.comment] } : item,
        ),
        post:
          state.post?._id === payload.id
            ? { ...state.post, comments: [...(state.post?.comments as any), payload.comment] }
            : state.post,
      };
    default:
      return state;
  }
};
