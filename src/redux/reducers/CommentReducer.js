
import * as ACTION from '../constants/constants';
const stateDefault = {
    comment: []
}

const CommentReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case ACTION.UPDATE_COMMENT: {

            return { ...state,  comment: [ ...action.payload ] }
        }
        default:
    }
    return { ...state }


}

export default CommentReducer;