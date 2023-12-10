import { RootState } from "../../store/configureStore";
import { PostState } from "../../types/Post/types";
import {
  CREATE_POST_SUCCESS,
  GET_POSTS,
  GET_POST_FAILURE,
  GET_POST_SUCCESS,
  INCREASE_COMMENT,
  LOAD_MORE_POST,
} from "../actions/actions";
import {
  PostAction,
  getPostSucces,
  increaseComment,
} from "../actions/postActions";

const initialState: PostState = {
  posts: [],
  loading: false,
  page: 1,
  totalItem: 0,
  totalPages: 0,
  isLoadMore: true,
};

const postReducer = (state = initialState, action: PostAction) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        loading: true,
      };
    case GET_POST_SUCCESS:
      const successAction = action as ReturnType<typeof getPostSucces>;
      console.log(successAction);
      return {
        ...state,
        posts:
          successAction.payload.page === 1
            ? successAction.payload.posts
            : [...state.posts, ...successAction.payload.posts],
        page: successAction.payload.page,
        totalPages: successAction.payload.totalPages,
        isLoadMore: false,
        loading: false,
      };
    case LOAD_MORE_POST:
      return {
        ...state,
        isLoadMore: true,
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        page: 1,
      };
    case INCREASE_COMMENT:
      const increaseCommentAction = action as ReturnType<
        typeof increaseComment
      >;
      const postList = state.posts.map((post) =>
        post.postId === increaseCommentAction.payload
          ? { ...post, commentCount: post.commentCount + 1 }
          : post
      );
      return {
        ...state,
        posts: postList,
      };
    default:
      return state;
  }
};

export const selectPostList = (state: RootState) => state.post.posts;
export const selectPostListLoading = (state: RootState) => state.post.loading;
export const selectPage = (state: RootState) => state.post.page;
export const selectTotalPages = (state: RootState) => state.post.totalPages;

export default postReducer;
