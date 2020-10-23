import { Metadata } from "@/models/metadata";
import { Post } from "@/models/post";
import { PostActions } from "./actions";

export interface PostState {
  data: Post[];
  metadata: Metadata;
  loading: boolean;
  error: string;
}

export const postInitialState: PostState = {
  data: [],
  metadata: {
    page: 0,
    pageSize: 20,
    total: 0,
  },
  loading: false,
  error: "",
};

export function postReducer(state = postInitialState, action: any) {
  switch (action.type) {
    case PostActions.GET_POSTS:
      return {
        ...state,
        loading: true,
      };
    case PostActions.GET_POSTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error || "",
      };
    case PostActions.GET_POSTS_SUCCEED:
      return {
        ...state,
        data: action.data?.posts || [],
        metadata: action.data?.metadata || state.metadata,
        loading: false,
        error: "",
      };
    default:
      return state;
  }
}
