import { createSlice } from "@reduxjs/toolkit";

export const CommentSlice = createSlice({
    name: 'comment',
    initialState: { value: [] },
    reducers: {
        get_comment: (state, action) => {
            state.value = action.payload
        }
    }
})

export const state = (state) => state.comment.value
export default CommentSlice.reducer