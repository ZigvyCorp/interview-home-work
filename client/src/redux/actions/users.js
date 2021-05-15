import { createActions } from 'redux-actions';

export const getType = (reduxAction)=>{
    return reduxAction().type;
}

export const getUsers = createActions({

   getUsersRequest:undefined,
   getUsersSuccess:(payload)=>payload,
   getUsersFailure:(err)=>err,

});