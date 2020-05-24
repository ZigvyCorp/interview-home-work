import { createAsyncAction } from '../redux';

export const { getPosts, getPostsSuccess, getPostsFail } = createAsyncAction(
  'getPosts'
);
