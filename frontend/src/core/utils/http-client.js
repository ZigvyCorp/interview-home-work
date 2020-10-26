import axios from "axios";
import qs from "qs";
import { uuid } from "./uuid"
import { store } from "../../redux/store";
import { addLoading, removeLoading} from "../../redux/loading/loading.action";
import { IS_DEBUG } from "./enviroments";

const axiosInstance = (
    isShowLoading = true,
    isShowError = true
  ) => {
    const instance = axios.create({
      baseURL: "",
      timeout: 30000,
    });
  
    const loadingId = uuid();
    /**Add loading */
    isShowLoading && store.dispatch(addLoading(loadingId));
  
    //=======Request interceptor=========
    instance.interceptors.request.use(
      async (config) => {
        /** In dev, intercepts request and logs it into console for dev */
        if (IS_DEBUG) {
          console.info("✉️ Request config: ", config);
        }
  
        return config;
      },
      (error) => {
        if (IS_DEBUG) {
          console.error("✉️ Request error", error);
        }
  
        /**Add loading */
        isShowLoading && store.dispatch(removeLoading(loadingId));
        return Promise.reject(error);
      }
    );
  
    //======Response interceptor============
    instance.interceptors.response.use(
      (config) => {
        /** In dev, intercepts request and logs it into console for dev */
        if (IS_DEBUG) {
          console.info("✉️ Response config: ", config);
        }
  
        /**Remove all loading */
        isShowLoading && store.dispatch(removeLoading(loadingId));
  
        return config;
      },
      (error) => {
        /**Remove all loading */
        isShowLoading && store.dispatch(removeLoading(loadingId));
  
        if (IS_DEBUG) {
          console.error("✉️ Response error: ", error.response);
        }
  
        // We need to make sure that this error includes data we need
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          // TODO: Add toast or something else here
          console.log(error.response.data.message)
        } else {
            console.log(error.response.data.message)
        }
  
        return Promise.reject(error);
      }
    );
  
    return instance;
};
  
export const getAsync = (
    url,
    params,
    isShowLoading = true,
    isShowError = true
  ) => {
    return axiosInstance(isShowLoading, isShowError).get(url, {
      params: params,
      paramsSerializer: function (serializeParams) {
        return qs.stringify(serializeParams, { arrayFormat: "repeat" });
      },
    });
  };
  
  export const postAsync = (
    url,
    json,
    isShowLoading = true,
    isShowError = true
  ) => {
    return axiosInstance(isShowLoading, isShowError).post(url, json);
  };
  
  export const putAsync = (
    url,
    json,
    isShowLoading = true,
    isShowError = true
  ) => {
    return axiosInstance(isShowLoading, isShowError).put(url, json);
  };
  
  export const deleteAsync = (
    url,
    isShowLoading = true,
    isShowError = true
  ) => {
    return axiosInstance(isShowLoading, isShowError).delete(url);
  };
  
  export const putWithFormFileAsync = (url, file) => {
    return axios.put(url, file, {
      headers: { "Content-Type": "application/octet-stream" },
    });
  };
  
  export default axiosInstance;