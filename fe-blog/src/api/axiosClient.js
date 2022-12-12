import axios from 'axios';


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
const axiosClient = axios.create();
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});
export default axiosClient;