import Axios from "axios";
import { createBrowserHistory } from "history";
import { ROOT_API } from "../constant/constants";

const instance = Axios.create({
  baseURL: ROOT_API,
  defaultInterceptors: true,
  timeout: 30000
});
const history = createBrowserHistory();

instance.interceptors.response.use(
  res => res,
  ({ response }) => {
    if (
      response.status === 401 &&
      response.data.message !== "an error has occurred while authenticating" &&
      response.data.message !== "user not found"
    ) {
      history.push("/");
      window.location.reload();
      window.localStorage.clear();
    }
    return response;
  }
);

export default instance;
