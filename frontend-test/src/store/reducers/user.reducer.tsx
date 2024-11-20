import { cloneDeep } from 'lodash';
import { FETCH_USERS_SUCCESS, UserActionTypes } from '../types/user.type';

interface UserState {
  users: Array<any> | undefined;
}

const initialState: UserState = {
  users: undefined,
};

export function userReducer(state: UserState = initialState, action: UserActionTypes): UserState {
  const newState = cloneDeep(state);

  switch (action.type) {
    
    case FETCH_USERS_SUCCESS: {
      newState.users = cloneDeep(action.payload)
      return newState;
    }
    
    default:
      return newState;
  }
};