import { createSelector } from 'reselect';

const selectPost = (state) => state.post;

export const selectIsPostFetching = createSelector([selectPost], (post) => post.isFetching);

export const selectIsPostsLoaded = createSelector([selectPost], (post) => {
    console.log(post);
});
