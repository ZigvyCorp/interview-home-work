import { useDispatch, useSelector } from "react-redux";
import { actions } from "../reducers/postReducer";

export const usePost = () => {
  const postState = useSelector((state) => state.post);
  const postDispatch = useDispatch();
  const postActions = actions;

  return [postState, postDispatch, postActions];
};
