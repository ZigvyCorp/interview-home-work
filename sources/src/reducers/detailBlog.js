const initialState = {
    blog: {},
}


const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_BLOG': {
            return {
                ...state,
                blog: action.payload,
            };
        }
        default:
            return state;
    }
}

export default blogReducer;