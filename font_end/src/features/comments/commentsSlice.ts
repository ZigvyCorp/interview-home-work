import {
    EntityId,
    createEntityAdapter,
    createSelector,
    createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Comment {
    ids: EntityId;
    id: string;
    post: string;
    email: string;
    content: string;
    owner: string;
    created_at: string;
}

const commentsAdapter = createEntityAdapter<Comment>();

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: commentsAdapter.getInitialState({
        status: 'idle',
        error: null,
    }),
    reducers: {
        getCommentsSucces: (state, action) => {
            commentsAdapter.upsertMany(state, action.payload.comments);
            state.status = 'idle';
        },
        getCommentsPending: (state) => {
            state.status = 'pending';
        },
        getCommentsError: (state, action) => {
            state.status = 'idle';
            state.error = action.payload;
        },
    },
});

export const { getCommentsError, getCommentsPending, getCommentsSucces } =
    commentsSlice.actions;
export const { selectAll: selectAllComments } = commentsAdapter.getSelectors(
    (state: RootState) => state.comments
);

export const selectCommentsByPostId = createSelector(
    selectAllComments,
    (_, postId) => postId,
    (comments, postId) =>
        comments.filter((comment: Comment) => comment.post === postId)
);
export default commentsSlice.reducer;
