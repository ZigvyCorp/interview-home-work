import {userConstants} from '../constants/user.constants'


export default (state = {users: {loading: true, data: {}}, user: {loading: true, data: {}, error: ''}, register: {loading: true, register_status: false, error: ''}}, action) => {
    switch(action.type)
    {
        case userConstants.GET_USERS: return {...state, 
            users: {
                loading: false, 
                data: action.data
            }
        }; break;
        case userConstants.LOGIN_REQUEST: return {...state, 
            user: {loading: true, data: {}, error: ''}
        }; break;
        case userConstants.LOGIN_FAILURE: return {...state, 
             
            user: {loading: false, error: action.error, data: {}}
        }; break;
        case userConstants.LOGIN_SUCCESS: return {...state, 
            user: {loading: false, data: action.user, error: ''}
        }; break;
        case userConstants.CLEAR_ERROR_DATA: return {...state,
            user: {loading: false, error: '', data: {}}
        }
        
        case userConstants.REGISTER_USER_REQUEST: return {...state, 
            register: {loading: true, register_status: false, error: ''}
        }; break;
        case userConstants.REGISTER_USER_FAILURE: return {...state, 
            register: {loading: false, register_status: false, error: action.error}
        }; break;
        case userConstants.REGISTER_USER_SUCCESS: return {...state, 
            register: {loading: false, register_status: true, error: ''}
        }; break;
        case userConstants.REGISTER_CLEAR_ERROR_DATA: return {...state,
            register: {loading: false, register_status: false, error: ''}
        }
        
        case userConstants.CLEAR_ALL_DATA: return {...state, 
            users: {loading: true, data: {}}, 
            user: {loading: true, data: {}, error: {}}
        }; break;

        default: return state;
    }
};