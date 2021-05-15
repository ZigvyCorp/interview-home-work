import { INIT_STATE } from '../../constant';
import { getUsers, getType } from '../actions/users';

export default function postsReducers(state= INIT_STATE.users,action){
    switch(action.type){
        case getType(getUsers.getUsersRequest):
            return{
                ...state,
                isLoading:true,
            }
        case getType(getUsers.getUsersSuccess):
            return{
                ...state,
                isLoading:false,
                data: action.payload,
            }
        case getType(getUsers.getUsersFailure):
            return{
                ...state,
                isLoading:false,
            }    
        default:
            return state;
    }

    
}