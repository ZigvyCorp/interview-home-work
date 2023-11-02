import actionTypes from '../actions/actionTypes';
const initialState = {
    posts: [],
    loading: false,
    error: null,
};
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.FETCH_POSTS_SUCCESS:
            let data = action.payload
            let { posts, users } = data
            const postsWithUsernames = posts.map(post => {
                const user = users.find(user => user.id === post.userId);
                return {
                    ...post,
                    name: user ? user.name : null
                };
            });
            return {
                ...state,
                loading: false,
                posts: postsWithUsernames,
            };
        case actionTypes.FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default postsReducer;