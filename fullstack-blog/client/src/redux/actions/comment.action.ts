import { commentApi } from "@/apis/comment.api";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Get all comment - by post id
export const getAllCommentByPostId = createAsyncThunk(
	"comment/getAllCommentByPostId",
	async (data: { id: string; page: number }, thunkApi) => {
		try {
			const res = await commentApi.getAllCommentByPostId(data.id, data.page);
			return res.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);

// Get comment by id
export const getCommentById = createAsyncThunk("comment/getCommentById", async (id: string, thunkApi) => {
	try {
		const res = await commentApi.getCommentById(id);
		return res.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error);
	}
});
