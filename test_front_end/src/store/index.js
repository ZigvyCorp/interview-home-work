import { createStore} from 'redux';
import PostReducer from './reducers/post.reducer';

export default createStore(PostReducer);