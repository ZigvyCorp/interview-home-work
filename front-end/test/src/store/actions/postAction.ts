import { createAction } from '@reduxjs/toolkit'

export const getPosts = createAction<undefined>('posts/getPosts')

export const createPost = createAction<undefined>('posts/createPost')

export const updatePost = createAction<undefined>('posts/updatePost')

export const deletePost = createAction<undefined>('posts/deletePostRq')

export const getPostsFailure = createAction<undefined>('posts/getPostsFailure')

export const createPostFailure = createAction<undefined>('posts/createPostFailure')

export const updatePostFailure = createAction<undefined>('posts/updatePostFailure')

export const deletePostFailure = createAction<undefined>('posts/deletePostFailure')
