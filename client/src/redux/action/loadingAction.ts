import { FINISHED, LOADING } from "../../constant/redux/action";

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
