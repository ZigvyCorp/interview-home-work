import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchUsers = ()=> axios.get(`${ URL }/users`);