import { createSelector } from "reselect";

import { IState } from "../../constant.store";
import { IPostsState } from "./posts.constant";

export const postListSelector = (state: IState) => {
  return state.posts;
};

export const postLoadingSelector = createSelector(
  postListSelector,
  (posts: IPostsState) => posts.loading
);
export const postErrorSelector = createSelector(
  postListSelector,
  (posts: IPostsState) => posts.error
);
export const postParamsSelector = createSelector(
  postListSelector,
  (posts: IPostsState) => {
    return posts.params;
  }
);

export const postsSelector = createSelector(
  postListSelector,
  (posts: IPostsState) => {
    return posts.data;
  }
);
