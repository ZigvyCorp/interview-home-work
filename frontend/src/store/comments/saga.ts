import { PayloadAction } from "@reduxjs/toolkit";
import { getComments } from "api/comments";
import { AxiosResponse } from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { TApiResponse, TGetCommentsRequest } from "types/api";
import { TComments } from "types/comments";
import { getCommentsFail, getCommentsSuccess } from "./slice";

export function* workGetComments(action: PayloadAction<TGetCommentsRequest>) {
    const { postId } = action.payload
    const { data }: AxiosResponse<TApiResponse<TComments[]>> = yield getComments({ postId })
    if (!data.data) {
        yield put(getCommentsFail(data.message as string))
        return
    }
    yield put(getCommentsSuccess({
        postId,
        comments: data.data
    }))
}

export function* watchGetComments() {
    yield takeEvery('comment/getCommentsStart', workGetComments)
}