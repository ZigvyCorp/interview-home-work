import axios, { AxiosResponse } from "axios";

// const baseURL: string = process.env.NEXT_PUBLIC_API_ENDPOINT.toString() || "";
const baseURL: string = "http://localhost:3000/";


const axiosClient = axios.create({
  baseURL: baseURL,
});

axiosClient.interceptors.response.use(
  (response) => {
    return handleResponse(response);
  },
  (error) => {
    return Promise.reject(handleError(error));
  }
);

const handleResponse = (res: AxiosResponse<any>) => {
  if (res && res.data) {
    return res.data;
  }

  return res;
};

const handleError = (error: { response: { data: any } }) => {
  const { data } = error.response;

  console.error(error);

  return data;
};

export default axiosClient;
