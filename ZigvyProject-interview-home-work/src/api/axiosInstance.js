import axios from "axios";
// const axiosInstance = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });
const axiosInstance = axios.create({ baseURL: "http://localhost:5000/api/" });

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response && error.response.status === 401) {
    //   window.location.href = "/login";
    console.log("Sorry")
    }
    return Promise.reject(
      error // (error.response && error.response.data) || "Something went wrong"
    );
  }
);

export default axiosInstance;
