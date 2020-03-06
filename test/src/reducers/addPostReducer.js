import * as types from '../actions/actionTypes';

const INITIAL_DATA = [];

const AddPostReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case types.ADD_POST:
            return [
                ...state, {
                    id: action.id,
                    author: action.author,
                    title: action.title,
                    text: action.text,
                    completed: false
                }
            ]
        case types.TOGGLE_POST:
            return state.map(post =>
                (post.id === action.id)
                    ? { ...post, completed: !post.completed }
                    : post
            )
        case types.REMOVE_POST:
            const numIndex = parseInt(action.id);
            return state.filter(post => post.id !== numIndex);
        default:
            return state;
    }
}

export default AddPostReducer;