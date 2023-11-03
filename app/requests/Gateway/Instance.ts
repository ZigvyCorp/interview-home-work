import axios from 'axios';

const ApiInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 100 * 10000,
});

export default ApiInstance;