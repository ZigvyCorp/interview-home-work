import { ACTION_CHANGE_LANGUAGE } from "./configs.constant";

interface IReducer {
  country: string;
  languages: string;
}

const initialState: IReducer = {
  country: "vn",
  languages: "en"
};

export default (
  state = initialState,
  action: {
    type: string;
    payload: object;
  }
) => {
  switch (action.type) {
    case ACTION_CHANGE_LANGUAGE: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
