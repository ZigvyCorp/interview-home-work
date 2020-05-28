import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userState from './users';
import postState from './posts';
import commentState from './comments';
import generalState from './general';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['postState']
}

const reducer = combineReducers({
  userState,
  postState,
  commentState,
  generalState
})

export default persistReducer(persistConfig, reducer);
