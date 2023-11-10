const { default: axios } = require("axios");

function getListPost(page, limit, search) {
  let url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;

  if (search) {
    url = url + `&title_like=${search}`;
  }
  return axios.get(url).then((res) => {
    res.total_record = res.headers["x-total-count"];
    return res;
  });
}

function getPostDetail(id) {
  let url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  return axios.get(url).then((res) => {
    return res;
  });
}

module.exports = {
  getListPost,
  getPostDetail,
};
