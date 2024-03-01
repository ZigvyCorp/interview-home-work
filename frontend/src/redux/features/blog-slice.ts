import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBlog } from '@/types/blog';

interface BlogState {
  blogs: IBlog[];
  q: string;
  page: number;
  limit: number;
  total: number;
}

const initialState: BlogState = {
  blogs: [],
  q: '',
  page: 1,
  limit: 10,
  total: 10,
};

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    createBlog(
      state,
      action: PayloadAction<Omit<IBlog, 'id' | 'dob' | 'createdAt'>>
    ) {},
    addBlog(state, action: PayloadAction<IBlog>) {
      state.blogs.push(action.payload);
    },
    updateBlog(state, action: PayloadAction<IBlog>) {
      const index = state.blogs.findIndex(
        (blog) => blog.id === action.payload.id
      );
      if (index !== -1) {
        state.blogs[index] = action.payload;
      }
    },
    deleteBlog(
      state,
      action: PayloadAction<{ blogId: string; userId: string }>
    ) {
      state.blogs = state.blogs.filter(
        (blog) =>
          blog.id !== action.payload.blogId &&
          blog.owner === action.payload.userId
      );
    },
    setBlogs(
      state,
      action: PayloadAction<{
        blogs: IBlog[];
        total?: number;
      }>
    ) {
      state.blogs = [...state.blogs, ...action.payload.blogs];
      state.total = action.payload.total || state.total;
    },
    getAllBlogs(
      state,
      action: PayloadAction<Partial<Omit<BlogState, 'blogs' | 'total'>>>
    ) {
      return {
        ...state,
        page: action.payload.page || state.page,
        limit: action.payload.limit || state.limit,
        q: action.payload.q || state.q,
      };
    },
    setBlogsNull(state) {
      state.blogs = [];
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  addBlog,
  setBlogs,
  setBlogsNull,
  setPage,
} = blogSlice.actions;

export default blogSlice.reducer;
