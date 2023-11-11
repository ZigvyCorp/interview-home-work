import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../modules/user/userSlice';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga';
import blogSlice from '../modules/hompage/blogSlice';
import commentSlice from '../modules/hompage/commentSlice';

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    users: userSlice,
    blogs: blogSlice,
    comments: commentSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)
