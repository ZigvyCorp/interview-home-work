interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    comments: any[];
}

interface PostsState {
    loading: boolean;
    posts: any[];
}

const initialState: PostsState = {
    posts: [],
    loading: false,
};

const postsReducer = (state = initialState, action: any): PostsState => {
    switch (action.type) {
        case 'FETCH_POSTS_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_POSTS_SUCCESS':
            return { ...state, loading: false, posts: action.payload };
        case 'FETCH_POSTS_FAILURE':
            return { ...state, loading: false };
        default:
            return state;
    }
};

export default postsReducer;