import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);

export const http = axios.create({
  baseURL: `${apiUrl}`,
});

export const setupInterceptors = () => {
  http.interceptors.request.use(
    (request) => {
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Add an interceptor to handle all incoming responses
  http.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
