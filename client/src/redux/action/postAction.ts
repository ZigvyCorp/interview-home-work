import { createAction } from "@reduxjs/toolkit/react"

const fetchPost = createAction<number>('post/fetchPost')
const createPost = createAction<number>('post/createPost')

export {
    fetchPost,
    createPost
}