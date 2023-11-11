import axios from "axios";

 const baseURL= "http://localhost:3000/";


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

 const handleResponse = (res) => {
   if (res && res.data) {
     return res.data;
   }

   return res;
 };

 const handleError = (error) => {
   const { data } = error.response;

   console.error(error);

   return data;
 };

 export default axiosClient;