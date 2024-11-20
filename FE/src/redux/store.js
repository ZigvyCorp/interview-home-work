import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import postSlice from './Reducers/postSlice';
import commentSlice from './Reducers/commentSlice';
import { rootSaga } from './sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { postSlice, commentSlice },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
