import { combineReducers } from 'redux';
import postReducer from './modules/Post/reducer';
import userReducer from './modules/User/reducer';
import commentReducer from './modules/Comment/reducer';

const reducer = combineReducers({
    postReducer,
    userReducer,
    commentReducer
});
export default reducer;