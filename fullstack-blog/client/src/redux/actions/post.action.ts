import { postApi } from "@/apis/post.api";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Get all post - query params: page, title
export const getAllPosts = createAsyncThunk(
	"post/getAllPosts",
	async (data: { page: number; title: string }, thunkApi) => {
		try {
			const res = await postApi.getAllPosts(data.page, data.title);
			return res.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);

// Get post by id
export const getPostById = createAsyncThunk("post/getPostById", async (id: string, thunkApi) => {
	try {
		const res = await postApi.getPostById(id);
		return res.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error);
	}
});

// Get post by id
export const createPost = createAsyncThunk("post/createPost", async (data: IPostCreate, thunkApi) => {
	try {
		const res = await postApi.createPost(data);
		console.log(res.data);
		return res.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error);
	}
});
