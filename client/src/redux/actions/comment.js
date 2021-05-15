import { createActions } from 'redux-actions';

export const getType = (reduxAction)=>{
    return reduxAction().type;
}

export const getComments = createActions({

    getCommentsRequest:undefined,
    getCommentsSuccess:(payload)=>payload,
    getCommentsFailure:(err)=>err,

});