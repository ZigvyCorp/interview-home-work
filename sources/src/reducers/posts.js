const initialState = {
    listPosts: []
}


const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_LISTPOSTS': {
            return {
                ...state,
                listPosts: action.payload,
            };
        }
        default:
            return state;
    }
}

export default postsReducer;