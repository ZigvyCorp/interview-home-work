import update from 'immutability-helper';

const initialState = {
  userList: [],
  currentUserId: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER_LIST':
      return update(state, { userList: { $set: action.userList } })

    case 'UPDATE_CURRENT_USER_ID':
      return update(state, { currentUserId: { $set: action.userId } })

    default:
      return state;
  }
};

export default rootReducer;