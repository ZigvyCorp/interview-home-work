import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
    posts: [],
    search: '',
    searchPosts: [],
    users: [],
    cmts: [],
    postsPerPage: 10,
    postDetail: {},
    error: null,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_POSTS_REQUEST':
            return {...state};
        case 'GET_POSTS_SUCCESS':
            return {...state, posts: action.payload, searchPosts: action.payload};
        case 'GET_POSTS_FAILED':
            return {...state, error: action.message};

        case 'GET_USERS_REQUEST':
            return {...state};
        case 'GET_USERS_SUCCESS':
            return {...state, users: action.payload};
        case 'GET_USERS_FAILED':
            return {...state, error: action.message};

        case 'GET_CMTS_REQUEST':
            return {...state};
        case 'GET_CMTS_SUCCESS':
            return {...state, cmts: action.payload};
        case 'GET_CMTS_FAILED':
            return {...state, error: action.message};

        case 'setPostDetail':
            return {...state, postDetail: action.payload};
        case 'setSearchPosts':
            return {...state, searchPosts: action.payload};
        case 'setSearch': 
            return {...state, search: action.payload};
        default: 
            return state;
    }
}



const persistConfig = {
    key: 'root',
    storage,
}


export const persist_Reducer = persistReducer(persistConfig, rootReducer);

export const store =  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(persist_Reducer);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {rootReducer , persistor};