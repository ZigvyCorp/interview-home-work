const initialState = {
    listComments: []
}


const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_LISTCOMMENTS': {
            return {
                ...state,
                listComments: action.payload,
            };
        }
        default:
            return state;
    }
}

export default commentsReducer;