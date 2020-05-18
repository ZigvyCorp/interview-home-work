// a library to wrap and simplify api calls
import apisauce from 'apisauce';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000/';

const create = (baseURL = BASE_URL, headers) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      ...headers,
      'Cache-Control': 'no-cache',
    },
    timeout: 5000,
  });

  return api;
};

// let's return back our create method as the default.
export default {
  create,
};
