import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, actionPayload) => {
        state.comments = actionPayload.payload;
    },
    getComments: (state, actionPayload) => {
    },
    postComment: (state, actionPayload) => {
    }
  },
  
});

export const { setComments, getComments, postComment } = commentSlice.actions;


export default commentSlice.reducer;
