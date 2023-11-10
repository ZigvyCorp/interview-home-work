import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IComment, ICommentState } from "./interface"

const initialState: ICommentState = {
    status: "idle",
    message: "",
}

const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        getCommentStart: (state) => {
			state.status = "pending";
		},
		getCommentSuccess: (state, action: PayloadAction<IComment[]>) => {
			state.status = "succeeded";
			state.comments = action.payload;
		},
		getCommentFailed: (state) => {
			state.status = "failed";
			// state.message = true;
		},
    },
});

//Actions
export const commentActions = commentSlice.actions;

//Reducer
const commentReducer = commentSlice.reducer; 
export default commentReducer;
