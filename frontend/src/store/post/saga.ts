import { PayloadAction } from "@reduxjs/toolkit";
import { getPosts } from "api/post";
import { put, takeEvery } from "redux-saga/effects";
import { TApiResponse, TGetPostsRequest } from "types/api";
import { TPost } from "types/post";
import { AxiosResponse } from "axios";
import { getPostsFail, getPostsSuccess } from "./slice";

export function* workGetPosts(action: PayloadAction<TGetPostsRequest>) {
    const { start, limit } = action.payload
    const { data }: AxiosResponse<TApiResponse<TPost[]>> = yield getPosts({
        start,
        limit
    })
    if (!data.data) {
        yield put(getPostsFail(data.message as string))
        return
    }
    yield put(getPostsSuccess({
        posts: data.data,
        total: data.total as number
    }))
}

export function* watchGetPosts() {
    yield takeEvery('post/getPostsStart', workGetPosts)
}