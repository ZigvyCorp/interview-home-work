// Utilities
import moment, { Moment } from 'moment';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Interface
import { Post, ManagePosts } from './interface.ts';

// Constants
import { PAGINATION } from 'constants/index.ts';

const initialState: ManagePosts = {
  posts: [],
  keyword: '',
  totalPage: 1,
  pageNumber: 1,
}

export const managePosts = createSlice({
  name: 'posts',
  initialState,

  reducers: {
    setPosts: (state, action) => {
      const posts = action.payload || [];
      const totalPosts = posts.length;

      state.posts = posts.map((post: Post): Post => {
        const subDataNumber = Math.floor(Math.random() * totalPosts);
        post.date = moment().subtract(subDataNumber, 'day')

        return post
      }).sort((a: Post, b: Post) => b.date.unix() - a.date.unix());

      state.totalPage = Math.floor(totalPosts / PAGINATION.MAX_ITEM_PER_PAGE);
    },

    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },

    setKeyword: (state, action) => {
      state.keyword = action.payload;
    }
  },
})
