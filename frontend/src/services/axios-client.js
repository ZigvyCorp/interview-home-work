import axios from "axios";

const axiosClient = axios.create();

axiosClient.interceptors.response.use(
	(response) => response.data,
	(error) => {
		if (error.response) {
			return Promise.reject(error.response.data);
		}
		return Promise.reject({ message: "Network Error" });
	}
);

export default axiosClient;
