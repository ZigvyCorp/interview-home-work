const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const get = (route) => {
  const url = BASE_URL + route;
  return fetch(url).then((res) => res.json());
};

export default {
  get,
};
