import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TGetPostsRequest } from "types/api";
import { TPost } from "types/post";
import { PER_PAGE } from "constant";

export type TPostState = {
    posts: {
        [page: string | number]: TPost[]
    },
    page: number,
    total: number,
    isLoading: boolean,
    error: string
}

const initialState: TPostState = {
    posts: {},
    total: 0,
    page: 1,
    isLoading: false,
    error: ''
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        },
        getPostsStart(state, _action: PayloadAction<TGetPostsRequest>) {
            state.isLoading = true
            state.error = ''
        },
        getPostsSuccess(state, action: PayloadAction<{
            posts: TPost[],
            total: number
        }>) {
            const { posts, total } = action.payload
            const page = posts[PER_PAGE - 1].id / PER_PAGE
            state.posts[page] = posts
            state.total = total
            state.isLoading = false
        },
        getPostsFail(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const {
    setCurrentPage,
    getPostsStart,
    getPostsSuccess,
    getPostsFail
} = postSlice.actions
export default postSlice.reducer