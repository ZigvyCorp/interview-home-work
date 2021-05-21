import { combineReducers} from 'redux';
import { listPostReducer } from './post';
import { listUserReducer } from './user';
import { listCommentReducer } from './comment';


const reducer = combineReducers({
     listPost : listPostReducer,
     listUser : listUserReducer,
     listComment : listCommentReducer
});
export default reducer;