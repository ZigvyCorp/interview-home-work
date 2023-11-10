import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IPost, IPostState } from "./interface"

const initialState: IPostState = {
    status: "idle",
    message: "",
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getAllPostStart: (state) => {
			state.status = "pending";
		},
		getAllPostSuccess: (state, action: PayloadAction<IPost[]>) => {
			state.status = "succeeded";
			state.posts = action.payload;
		},
		getAllPostFailed: (state) => {
			state.status = "failed";
			// state.message = true;
		},
    },
});

//Actions
export const postActions = postSlice.actions;

//Reducer
const postReducer = postSlice.reducer;
export default postReducer;
