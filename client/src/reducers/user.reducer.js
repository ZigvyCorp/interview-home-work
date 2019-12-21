import {userConstants} from '../constants/user.constants'


export default (state = {users: {loading: true, data: {}}, user: {loading: true, data: {}}}, action) => {
    switch(action.type)
    {
        case userConstants.GET_USERS: return {...state, 
            users: {
                loading: false, 
                data: action.data
            }
        }; break;
        case userConstants.CLEAR_ALL_DATA: return {...state, 
            users: {loading: true, data: {}}, 
            user: {loading: true, data: {}}
        }; break;
        
        default: return state;
    }
};

