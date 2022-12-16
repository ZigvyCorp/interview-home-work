import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name:"data",
  initialState : {
    posts: [],
    comments: [],
    users: [],
    searchData: "",
    formatData: [],
  },
  reducers: {
    getPost: (state , {payload}) => {
      state.posts = payload;
    },
    getComment: (state , {payload}) => {
      state.comments = payload;
    },
    getUser: (state , {payload}) => {
      state.users = payload;
    },
    getSearchData: (state , {payload}) => {
      state.searchData = payload;
    },
    getFormatData: (state , {payload}) => {
      state.formatData = payload;
    },
  },
})

export const {getPost, getComment, getUser, getSearchData, getFormatData} = dataSlice.actions;
export default dataSlice.reducer;