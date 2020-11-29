import Axios from "axios";
import _ from "lodash";

export const getBlogPostsService = () => {
  return Axios.get(process.env.REACT_APP_SERVER + "/")
    .then((res) => res)
    .catch((err) => ({
      error: _.get(err, "response.data.error"),
    }));
};

export const createBlogPostService = (user) => {
  return Axios.post(process.env.REACT_APP_SERVER + "/", user)
    .then((res) => res)
    .catch((err) => ({
      error: _.get(err, "response.data.error"),
    }));
};
