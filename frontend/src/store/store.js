import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from 'redux-saga'
import saga from '../middleware/saga'
import PostReducer from '../reducer/PostSlice'
import UserSlice from "../reducer/UserSlice";
import CommentSlice from "../reducer/CommentSlice";

const sagaMiddleware = createSagaMiddleWare()

export const store = configureStore(
    {reducer: {post: PostReducer, user: UserSlice, comment: CommentSlice},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
    })

sagaMiddleware.run(saga)