import { createSlice } from '@reduxjs/toolkit'

export const commentReducer = createSlice({
    name: 'commentReducer',
    initialState: {
        comment: [],
        isLoading: false
    },
    reducers: {
        getComment: (state) => {
            state.isLoading = true
        },
        getCommentSuccess: (state, action) => {
            state.comment = action.payload
            state.isLoading = false
        },
        getCommentFailure: (state, action) => {
            state.comment = action.payload
            state.isLoading = false
        }
    }
})

export const { getComment, getCommentSuccess, getCommentFailure } = commentReducer.actions
export default commentReducer.reducer;