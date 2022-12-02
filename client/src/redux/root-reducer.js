import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import postReducer from './post/post.reducer';
import commentReducer from './comment/comment.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['post'],
};

const rootReducer = combineReducers({
    post: postReducer,
    comment: commentReducer,
});

export default persistReducer(persistConfig, rootReducer);
