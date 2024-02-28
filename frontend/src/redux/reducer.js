import { combineReducers } from 'redux';
import postReducer from '../features/Posts/Services/postReducer';

const rootReducer = combineReducers({
    posts: postReducer,
    // Thêm các reducer khác nếu cần
});

export default rootReducer;