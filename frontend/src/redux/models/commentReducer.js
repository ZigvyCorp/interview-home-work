import * as Actions from '../actionTypes';
const initialState = {
    allComment: []
    // allComment: [
    //     {
    //         "id": 1,
    //         "owner": 1,
    //         "post": 1,
    //         "content": "Boring!!!",
    //         "created_at": 1576506719083
    //     },
    //     {
    //         "id": 2,
    //         "owner": 3,
    //         "post": 1,
    //         "content": "Very good. But very bad also",
    //         "created_at": 1576506719083
    //     },
    //     {
    //         "id": 3,
    //         "owner": 2,
    //         "post": 2,
    //         "content": "Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery. ",
    //         "created_at": 1576506719083
    //     }
    // ]
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.UPDATE_COMMENT: {
            return {
                ...state,
                allComment: [...action.payload]
            }
        }
        case Actions.ADD_COMMENT: {
            return {
                ...state,
                allComment: [...state.allComment, ...action.payload]
            }
        }
        default: {
            return state;
        }
    }
}

export default commentReducer