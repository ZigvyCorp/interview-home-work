import * as homepageConstants from 'redux/constants/homepageConstants';

const initialState = {
  data: [1,2,3]
};

const homepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case homepageConstants.TEST:
      return {
        ...state,
        data: [...state.data, ...action.payload]
      }
    default:
      return {
        ...state
      }
  }
}

export default homepageReducer;