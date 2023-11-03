import { call, put, takeLatest } from 'redux-saga/effects';
import { NActionBlog } from '../slices/blog/blog.action';
import {
  BaseAction,
  IBlog,
  ReturnListResponse,
  ReturnResponse,
} from '../interfaces';
import { responseHasError } from '../utils';
import { queryBlog } from '../services/apis/blog/query';
import {
  queryListAsync,
  queryListAsyncSuccess,
  queryListAsyncFailed,
  getDetailAsync,
  getDetailAsyncSuccess,
  getDetailAsyncFailed,
} from '../slices/blog/blog.slice';
import { getDetailBlog } from '../services/apis/blog/detail';

function* getListSagaAsync(action: BaseAction<NActionBlog.InputListPayload>) {
  const { body } = action.payload;
  try {
    yield put(queryListAsync());

    const response: ReturnListResponse<any> = yield call(queryBlog, body);

    if (responseHasError(response.success)) throw new Error(response.message);

    yield put(
      queryListAsyncSuccess({
        list: response?.data?.list,
        paging: response?.data?.paging,
        textSearch: body.textSearch || '',
      })
    );
  } catch (e) {
    yield put(queryListAsyncFailed());
  }
}

function* getDetailSagaAsync(
  action: BaseAction<NActionBlog.InputDetailPayload>
) {
  const { id } = action.payload;
  try {
    yield put(getDetailAsync());

    const response: ReturnResponse<IBlog> = yield call(getDetailBlog, id);

    if (responseHasError(response.success)) throw new Error(response.message);

    yield put(getDetailAsyncSuccess(response.data));
  } catch (e) {
    yield put(getDetailAsyncFailed());
  }
}

export function* blogSaga() {
  yield takeLatest(NActionBlog.LIST, getListSagaAsync);
  yield takeLatest(NActionBlog.DETAIL, getDetailSagaAsync);
}
