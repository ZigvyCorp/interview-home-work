import Axios from "axios";
import _ from "lodash";

export const logInUserService = (user) => {
  return Axios.post(process.env.REACT_APP_SERVER + "/login", user)
    .then((res) => res)
    .catch((err) => ({
      error: _.get(err, "response.data.error"),
    }));
};

export const signUpUserService = (user) => {
  return Axios.post(process.env.REACT_APP_SERVER + "/signup", user)
    .then((res) => res)
    .catch((err) => ({
      error: _.get(err, "response.data.error"),
    }));
};
