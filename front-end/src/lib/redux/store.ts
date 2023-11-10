// Utilities
import {
  type TypedUseSelectorHook,
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from 'react-redux'
import { reducer } from './rootReducer';
import { middleware } from './middleware';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagaMiddleware.ts';
import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware()

export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware).concat(sagaMiddleware)
  },
});

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

/* Types */
export type ReduxStore = typeof reduxStore;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;

sagaMiddleware.run(rootSaga)
