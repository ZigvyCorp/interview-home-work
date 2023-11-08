// import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";

import { IComment, IPost } from "./interfaces";

import { BLOGS_SERVICES } from "./service";
import { blogAction } from "./slice";

export function* getPosts() {
  try {
    const response: AxiosResponse<any> = yield call(BLOGS_SERVICES.getPosts);
    const authorList: AxiosResponse<any> = yield call(BLOGS_SERVICES.getUsersAuthor);
    const commentList: AxiosResponse<any> = yield call(BLOGS_SERVICES.getComments);
    if (response.data && authorList.data && commentList.data) {
      const finalList = response.data.map((item: IPost) => {
        return {
          ...item,
          author: (authorList.data as Array<any>).find((author) => author.id === item.userId).name || "",
          comments: (commentList.data as Array<IComment>).filter((comment) => comment.postId === item.id),
          createdDate: new Date(),
        };
      });
      yield put(blogAction.getPostsSuccess(finalList));
    }
  } catch (error: any) {
    yield put(blogAction.getPostsFail(error));
  }
}

export default function* blogSaga() {
  yield takeLatest(blogAction.getPosts.type, getPosts);
}
