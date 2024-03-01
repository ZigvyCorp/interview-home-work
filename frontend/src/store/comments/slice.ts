import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TGetCommentsRequest } from "types/api";
import { TComments } from "types/comments";

export type TCommentState = {
    comments: {
        [postId: string | number]: TComments[]
    },
    isLoading: boolean,
    error: string
}

const initialState: TCommentState = {
    comments: {},
    isLoading: false,
    error: ''
}

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        getCommentsStart(state, _action: PayloadAction<TGetCommentsRequest>) {
            state.isLoading = true
            state.error = ''
        },
        getCommentsSuccess(state, action: PayloadAction<{
            postId: number,
            comments: TComments[]
        }>) {
            const { postId, comments } = action.payload
            state.comments[postId] = comments
            state.isLoading = false
        },
        getCommentsFail(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const {
    getCommentsStart,
    getCommentsSuccess,
    getCommentsFail
} = commentSlice.actions
export default commentSlice.reducer