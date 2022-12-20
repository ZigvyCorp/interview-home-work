import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: []
}

const CommentReducer = createSlice({
  name: 'CommentReducer',
  initialState,
  reducers: {
    getComments: (state, action) => {
      state.comments = action.payload
    }
  }
})

export const {getComments} = CommentReducer.actions
export default CommentReducer.reducer