import { IBlog } from "../../utils/type.ts";
interface blogAction {
  type: "BLOG" | "GET_BLOGS";
  payload: IBlog;
}
const blogReducer = (state: IBlog[] = [], action: blogAction) => {
  switch (action.type) {
    case "BLOG":
      return action.payload;
    case "GET_BLOGS":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default blogReducer;
