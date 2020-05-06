import update from 'immutability-helper';

const initialState = {
  userList: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER_LIST':
      return update(state, { userList: { $set: action.userList } })
    default:
      return state;
  }
};

export default rootReducer;