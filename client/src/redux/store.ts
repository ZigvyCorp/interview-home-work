import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { postReducer } from './saga/post/postReducer';
import rootSaga from './saga/rootSaga';
import { uiReducer } from './saga/ui/uiReducer';
import { userReducer } from './saga/user/userReducer';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: combineReducers({
        postReducer,
        userReducer,
        uiReducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga)

export const action = (type: any) => store.dispatch({ type })
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch