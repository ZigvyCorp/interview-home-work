const { default: axios } = require("axios");

function getListUser() {
  let url = `https://jsonplaceholder.typicode.com/users`;

  return axios.get(url).then((res) => {
    return res;
  });
}

function getUserDetail(id) {
  let url = `https://jsonplaceholder.typicode.com/users/${id}`;

  return axios.get(url).then((res) => {
    return res;
  });
}

module.exports = {
  getListUser,
  getUserDetail,
};
