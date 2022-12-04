import axios from 'axios';

const URL = 'http://localhost:5000';

export const postRequest = (prefix, body) => fetch(URL + prefix, {
    method: 'POST',
    body: body,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })