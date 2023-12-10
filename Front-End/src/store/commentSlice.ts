import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../util/api";

export interface comment {
    _id: string,
    comment: string,
    createdAt: string,
    blog:string,
    userCommentUser: {
        _id: string,
        name: string,
        email: string
    }
}
interface InitialState {
    loadingComment: boolean;
    listComment: comment[]
    error?: string;
}

const initialState: InitialState = {
    loadingComment: false,
    listComment: [{
        _id: "",
        comment: "",
        createdAt: "",
        blog: "",
        userCommentUser: {
            _id: "",
            name: "",
            email: "",
        }
    }],
    error: "",
};

export const getListCommentByBlog = createAsyncThunk(
    '/comment/list-comment',
    async (id: string, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await api.get(`/comment/list-comment/${id}`);
            return response.data;
        } catch (error: any) {
            const errorObj = JSON.parse(error.request.response);
            return rejectWithValue(errorObj);
        }
    },
);

export const commentBlog = createAsyncThunk(
    '/comment',
    async (payload: { comment: string, userComment: string, blog: string }, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await api.post(`/comment`, { ...payload });
            return response.data;
        } catch (error: any) {
            const errorObj = JSON.parse(error.request.response);
            return rejectWithValue(errorObj);
        }
    },
);

export const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        setLoadingComment: (state, action: PayloadAction<boolean>) => {
            state.loadingComment = action.payload;
        },
        setListComment: (state, action: PayloadAction<comment[]>) => {
            state.listComment = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getListCommentByBlog.pending, (state) => {
                state.loadingComment = true;
            })
            .addCase(getListCommentByBlog.fulfilled, (state, action) => {
                state.loadingComment = false;
                state.listComment = action.payload
            })
            .addCase(getListCommentByBlog.rejected, (state) => {
                state.loadingComment = false;
            })
            .addCase(commentBlog.pending, (state) => {
                state.loadingComment = true;
            })
            .addCase(commentBlog.fulfilled, (state, action) => {
                state.loadingComment = false;
            })
            .addCase(commentBlog.rejected, (state) => {
                state.loadingComment = false;
            });
    },
});
export const { setLoadingComment, setListComment } = commentSlice.actions;
export default commentSlice.reducer;