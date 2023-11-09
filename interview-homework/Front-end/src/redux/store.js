import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './postsSlice';
import usersSlice from './usersSlide';
import commentsSlice from './commentsSlice';

import createSagaMiddleware from 'redux-saga';
import apiSaga from '../saga/apiSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    users: usersSlice,
    comments: commentsSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(apiSaga);
