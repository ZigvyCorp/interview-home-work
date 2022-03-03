import {GET_ALL_USERS_SUCCESS} from '../actions/actionCreator';

const initState = {
        userList:[]
    };

const userReducer = (state = initState,action)=>{
    switch(action.type){
        case GET_ALL_USERS_SUCCESS:
            return {
                userList:[...action.payload]
            };
        default:
            return state;
    }
};

export default userReducer;