export const FETCH_POSTS = 'FETCH_POSTS';
export const SET_POSTS = 'SET_POSTS';
export const TOGGLE_COMMENT = 'TOGGLE_COMMENT';

const initialState = {
    posts: [],
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        case TOGGLE_COMMENT:
            const { postId } = action.payload;
            const updatedPosts = state.posts.map((post) => {
                if (post.id === postId) {
                    return {
                        ...post,
                        showComments: !post.showComments,
                    };
                }
                return post;
            });
            return {
                ...state,
                posts: updatedPosts,
            };
        default:
            return state;
    }
};

export default postReducer;
