const initState = '';

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case 'search/searchChange':
            return action.payload;

        default:
            return state;
    }
};

export default searchReducer;
