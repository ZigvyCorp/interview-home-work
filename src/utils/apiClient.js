const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const get = (route) => {
  const url = BASE_URL + route;
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
      return null;
    });
};

export default {
  get,
};
