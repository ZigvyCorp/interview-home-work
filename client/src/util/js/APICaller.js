import axios from 'axios';

const buildAxiosConfig = (api, method, headers = null) => {
  let config = {
    url: api,
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  if (headers) config.headers = { ...config.headers, ...headers };
  if (headers?.responseType) config.responseType = headers.responseType;
  return config;
};

const callAxios = (api, payload = null, method, headers = null) => {
  const config = buildAxiosConfig(api, method, headers);
  if (payload) {
    if (method === 'get') config.params = payload;
    else config.data = payload;
  }

  return axios(config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      const status = err.response?.status;
      const data = err.response?.data;
      console.log('err', err);
    });
};

export const get = (
  api,
  params = null,
  headers = null,
) => {
  return callAxios(api, params, 'get', headers);
};
