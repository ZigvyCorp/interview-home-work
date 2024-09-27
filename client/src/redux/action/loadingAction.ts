import { FINISHED, LOADING } from "../../types/redux/action";

export function loading() {
  return {
    type: LOADING,
  };
}

export function finished() {
  return {
    type: FINISHED,
  };
}
