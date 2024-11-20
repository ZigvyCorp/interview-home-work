import axios from "axios";
export const https = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const localStorage = window.localStorage.getItem('persist:techshop/user');
    if (localStorage && typeof localStorage === 'string') {
      const accessToken = JSON.parse(JSON.parse(localStorage).accessToken);
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      }


    }



    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error.data;
  }
);
