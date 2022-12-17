
import * as ACTION from '../constants/constants';
const stateDefault = {
    userList: []
}

const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case ACTION.UPDATE_USER: {
            return { ...state,  userList: [ ...action.payload ] }
        }
        default:
    }
    return { ...state }


}

export default UserReducer;