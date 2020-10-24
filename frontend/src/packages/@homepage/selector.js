import { createSelector as createSelectorOrigin } from 'reselect';

const createSelector = (select) =>
  createSelectorOrigin((state) => state.homepage, select);

export const selectedPosts = createSelector((state) => state.posts);
export const selectedPage = createSelector((state) => state.page);
export const selectedLimit = createSelector((state) => state.limit);
export const selectedLoading = createSelector((state) => state.loading);
export const selectedError = createSelector((state) => state.error);
export const selectedKeyword = createSelector((state) => state.keyword);
export const selectedHasMore = createSelector((state) => state.hasMore);

