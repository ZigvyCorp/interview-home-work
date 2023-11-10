import { INIT_STATE } from "../constant/index";
import { getPosts, getType, createPost, updatePost } from "../actions";

export default function postsReducers(state = INIT_STATE.posts, action) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPosts.getPostsSuccess):
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        listpost: action.payload,
      };
    case getType(getPosts.getPostsFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createPost.createPostSuccess):
      return {
        ...state,
        listpost: [...state.listpost, action.payload],
      };
    case getType(updatePost.updatePostSuccess):
      return {
        ...state,
        listpost: state.listpost.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    default:
      return state;
  }
}
