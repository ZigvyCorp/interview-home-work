import axios from 'axios';

export const callAPI = async (endpoint, method = 'GET', body, headers) => {
  try {
    return await axios({
      method: method,
      url: `${BackendHost.BACKEND_HTTP}/${endpoint}`,
      data: body,
      headers: headers,
    });
  } catch (err) {
    console.log(err);
  }
};