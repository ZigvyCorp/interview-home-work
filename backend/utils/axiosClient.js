const { default: axios } = require('axios');

const BASE_URL = `https://jsonplaceholder.typicode.com`;

const axiosClient = axios.create({
    baseURL: BASE_URL
});

axiosClient.interceptors.response.use((response) => {
    return response.data;
}, (err) => {
    console.log("Fetch data error", err);
});

module.exports = axiosClient;