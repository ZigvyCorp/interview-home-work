import { call, put, takeLatest } from 'redux-saga/effects';
import { BaseActionResolver } from '../../core/base';
import { ReturnResponse } from '../../core/return-response';
import { PostsRepository } from '../../requests/posts';
import { setCommentsByPostId, setLoading, setPosts } from '../redux';
import { NActionApp } from '../redux/app.action';
import { CommentsRepository } from '../../requests/comments';

function* getPosts(action: BaseActionResolver<NActionApp.ParamsPaging>) {
  try {
    const paging = action.payload;
    yield put(setLoading(true));
    const repository = new PostsRepository();
    const response: ReturnResponse<any> = yield call(
      (paging) => repository.GetPosts(paging),
      paging
    );

    const { results, ...rest } = response;

    const _list = results;
    const posts = Array.isArray(_list) && _list.length > 0 ? [..._list] : [];

    yield put(setPosts({ data: posts, paging: rest }));
  } catch (e) {
    console.log('e', e);
  }
}

function* getPostById(action: BaseActionResolver<any>) {
  try {
    const { id } = action.payload;
    if (!id) return;

    yield put(setLoading(true));
    const repository = new PostsRepository();
    const response: ReturnResponse<any> = yield call(
      (id) => repository.GetPostById(id),
      { id }
    );
    const { results, ...rest } = response;

    const _list = results;
    const posts = Array.isArray(_list) && _list.length > 0 ? [..._list] : [];

    yield put(setPosts({ data: posts, paging: rest }));
  } catch (e) {
    console.log('e', e);
  }
}

function* getCommentsByPostId(
  action: BaseActionResolver<NActionApp.ParamsGetCommentsByPostId>
) {
  try {
    const { postId } = action.payload;

    yield put(setLoading(true));
    const repository = new CommentsRepository();
    const response: ReturnResponse<any> = yield call(
      (postId) => repository.GetCommentsByPostId(postId),
      { postId }
    );

    const _list = response.results;
    const comments = Array.isArray(_list) && _list.length > 0 ? [..._list] : [];

    yield put(setCommentsByPostId({ postId, comments }));
  } catch (e) {
    console.log('e', e);
  }
}

export function* appSaga() {
  yield takeLatest(NActionApp.GET_POSTS, getPosts);
  yield takeLatest(NActionApp.GET_POST_BY_ID, getPostById);
  yield takeLatest(NActionApp.GET_COMMENTS_BY_POST_ID, getCommentsByPostId);
}
