import { createSlice } from "@reduxjs/toolkit";
import { createComment, getAllCommentByPostId } from "../actions/comment.action";
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
	reducers: {
		showMoreComment: (state, { payload }) => {
			// state.listComment.comments = [...state.listComment.comments, ...payload.comments];
			state.listComment.currentPage += 1;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAllCommentByPostId.fulfilled, (state, { payload }) => {
			if (state.listComment.currentPage === 1) {
				state.listComment = payload;
			} else {
				state.listComment = {
					...state.listComment,
					comments: [...state.listComment.comments, ...payload.comments],
					currentPage: payload.currentPage,
					totalComments: payload.totalComments,
					totalPages: payload.totalPages,
				};
			}
		});
		builder.addCase(createComment.fulfilled, (state, { payload }) => {
			state.listComment.comments.unshift(payload);
			state.listComment.totalComments += 1;
			state.listComment.totalPages = Math.ceil(state.listComment.totalComments / 6);
			state.listComment.currentPage = 1;
		});
	},
});

export const { showMoreComment } = commentSlice.actions;
export const selectComment = (state: RootState) => state.comment;
export default commentSlice.reducer;
