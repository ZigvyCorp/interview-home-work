import { createSlice } from "@reduxjs/toolkit";
import { getAllCommentByPostId } from "../actions/comment.action";
import { RootState } from "../store";

interface InitialState {
	listComment: {
		comments: IComment[];
		currentPage: number;
		totalComments: number;
		totalPages: number;
	};
	detailComment: {
		comment: IComment | null;
	};
}

const initialState: InitialState = {
	listComment: {
		comments: [],
		currentPage: 0,
		totalComments: 0,
		totalPages: 0,
	},
	detailComment: {
		comment: null,
	},
};

const commentSlice = createSlice({
	name: "comment",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllCommentByPostId.fulfilled, (state, { payload }) => {
			state.listComment.comments = payload.comments;
			state.listComment.totalComments = payload.totalComments;
			state.listComment.totalPages = payload.totalPages;
			state.listComment.currentPage = payload.currentPage;
		});
		// builder.addCase(getPostById.fulfilled, (state, { payload }) => {
		// 	console.log(payload);
		// 	if (!state.detailPost) {
		// 		state.detailPost = {} as IComment;
		// 	}
		// 	state.detailPost = payload;
		// });
	},
});

export const {} = commentSlice.actions;
export const selectComment = (state: RootState) => state.comment;
export default commentSlice.reducer;
