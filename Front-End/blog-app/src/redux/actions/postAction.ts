import { createAction } from "@reduxjs/toolkit";

export const getPostsRq = createAction<undefined>("posts/getPostsRq");

export const createPostRq = createAction<undefined>("posts/createPostRq");

export const updatePostRq = createAction<undefined>("posts/updatePostRq");

export const deletePostRq = createAction<undefined>("posts/deletePostRq");

export const getPostsFailure = createAction<undefined>("posts/getPostsFailure");

export const createPostFailure = createAction<undefined>(
  "posts/createPostFailure"
);

export const updatePostFailure = createAction<undefined>(
  "posts/updatePostFailure"
);

export const deletePostFailure = createAction<undefined>(
  "posts/deletePostFailure"
);
