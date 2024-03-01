import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BlogInterface } from "../typeProps";

type BlogProps = {
  blogArr: BlogInterface[];
  status: string;
};
let blog: BlogProps = {
  blogArr: [],
  status: "idle",
};
//
type initialStateType = {
  blog: BlogProps;
};
const initialState: initialStateType = {
  blog,
};
const blogSlide = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.blog.status = "loading";
      })
      .addCase(
        fetchBlog.fulfilled,
        (state, action: PayloadAction<BlogInterface[]>) => {
          state.blog.blogArr = action.payload;
          state.blog.status = "idle";
        }
      );
  },
});
export const fetchBlog = createAsyncThunk("blog/fetchBlog", async () => {
  try {
    const blogs = await fetch("http://localhost:8000/v1/blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    return blogs;
  } catch (e) {
    console.log(e);
  }
});

export const {} = blogSlide.actions;
export default blogSlide.reducer;
