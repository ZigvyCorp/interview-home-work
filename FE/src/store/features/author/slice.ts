/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice } from "@reduxjs/toolkit";
import { AuthorPayload } from "@/models";

export interface AuthorState {
  author: AuthorPayload;
  isLoading: boolean;
  errorMessage: string;
}

const initialState: AuthorState = {
  author: {
    address: {
      city: "",
      geo: {
        lat: 0,
        lng: 0,
      },
      street: "",
      suite: "",
      zipcode: "",
    },
    company: {
      bs: "",
      catchPhrase: "",
      name: "",
    },
    email: "",
    id: -1,
    name: "",
    phone: "",
    username: "",
    website: "",
  },
  isLoading: false,
  errorMessage: "",
};

export const authorSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    getAuthor: (state, _) => {
      state.isLoading = true;
    },
    getAuthorSuccess: (state, action) => {
      state.isLoading = false;
      state.author = action.payload.author;
    },
    getAuthorFailed: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.errorMessage;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAuthor, getAuthorFailed, getAuthorSuccess } =
  authorSlice.actions;

export const authorReducer = authorSlice.reducer;
