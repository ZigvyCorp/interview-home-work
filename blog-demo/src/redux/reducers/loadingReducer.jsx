import { CLOSE__LOADING, PAGE__LOADING } from "../../types/postComponent";

const stateDefault = {
  isLoading: false,
};

export const loadingReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case PAGE__LOADING: {
      state.isLoading = true;
      return { ...state };
    }

    case CLOSE__LOADING: {
      state.isLoading = false;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
