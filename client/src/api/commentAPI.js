import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchComments = ()=> axios.get(`${ URL }/comments`);