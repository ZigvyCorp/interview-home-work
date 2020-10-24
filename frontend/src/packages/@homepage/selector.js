import { createSelector as createSelectorOrigin } from 'reselect';

const createSelector = (select) =>
    createSelectorOrigin((state) => state.homepage, select);

export const selectedPosts = createSelector(state=> state.posts)