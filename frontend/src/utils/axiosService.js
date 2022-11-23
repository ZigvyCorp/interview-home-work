import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    let data = localStorage.getItem("persist:auth");
    let auth = JSON.parse(data);
    console.log(auth.token,"auth.token");

    // Do something before request is sent
    if (auth.token) config.headers.Authorization = `Bearer ${JSON.parse(auth.token)}`;
    // OR config.headers.common['Authorization'] = `Bearer ${your_token}`;
    config.baseURL = "http://localhost:4000";

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
