import * as Types from "./notifications.constant";

export default (
  state = {
    toggle: false,
    data: null
  },
  action: {
    type: string;
    payload: any;
  }
) => {
  if (action.type === Types.ACTION_TOGGLE_NOTIFICATIONS) {
    return { ...state, ...action.payload };
  }
  return state;
};
