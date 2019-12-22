import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
  loading: false,
  redirect: false
}

const createNewPostStart = (state, action) => update(state, {loading: {$set: true}})

const createNewPostSuccess = (state, action) => update(state, {loading: {$set: false}, redirect: {$set: true}})

const createNewPostFail = (state, action) => update(state, {loading: {$set: false}})

const clearRedirect = (state, action) => update(state, {redirect: {$set: false}})

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_POST_START: return createNewPostStart(state, action);
    case actionTypes.CREATE_NEW_POST_SUCCESS: return createNewPostSuccess(state, action);
    case actionTypes.CREATE_NEW_POST_FAIL: return createNewPostFail(state, action)
    case actionTypes.CREATE_NEW_POST_CLEAR_REDIRECT: return clearRedirect(state, action)
    default: return state;
  }
}