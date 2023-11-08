import { GET } from '../actions/post.actions';

const PostReducer = (state = { list: 5 }, action) => {
    switch (action.type) {
        case GET: return {list: state.list};
        default: return state;
    }
}

export default PostReducer;