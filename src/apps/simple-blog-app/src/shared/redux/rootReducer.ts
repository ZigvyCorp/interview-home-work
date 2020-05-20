import blogWrapperReducer from '../../views/Blogs/BlogWrapper.reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	blogState: blogWrapperReducer,
});
export default rootReducer;
