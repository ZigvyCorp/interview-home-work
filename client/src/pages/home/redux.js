// import callAPI from "../../utils/api";
// import * as Constants from "../../constants";

//constants
const Types = {
  GET_SOCKET: "GET_SOCKET",
  COURSE_DETAIL: "COURSE_DETAIL"
};

//actions

//reducers
const initialState = {
  socketClient: "hello"
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
