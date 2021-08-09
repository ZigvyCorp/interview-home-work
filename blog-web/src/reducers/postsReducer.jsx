import * as types from '../constants/ActionTypes'
var initialState =
{
    posts: [],
    users: [],
    comments: [],
}
    ;

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        // case types.LIST_ALL:
        //     return state;
        case types.FETCH_ALL_POSTS:
            state.posts = action.data;
            return state
        case types.FETCH_ALL_USERS:
            state.users = action.data;
            return state
        case types.FETCH_ALL_COMMENTS:
            state.comments = action.data;
            return state
        case types.ADD_POSTS:
            state.posts.push(action.data);
            return state
        case types.SEARCH_POSTS:
            console.log(action)
            return state
        default: return state;
    }

}

export default myReducer;