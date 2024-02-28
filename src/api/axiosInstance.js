import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/",
});

axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
