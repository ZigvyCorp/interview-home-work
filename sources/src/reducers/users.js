const initialState = {
    listUsers: []
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_LISTUSERS': {
            return {
                ...state,
                listUsers: action.payload,
            };
        }
        default:
            return state;
    }
}

export default usersReducer;