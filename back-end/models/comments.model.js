const { default: axios } = require("axios");

function getListComment() {
  let url = `https://jsonplaceholder.typicode.com/comments`;

  return axios.get(url).then((res) => {
    return res;
  });
}

function getCommentDetail(id) {
  let url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;

  return axios.get(url).then((res) => {
    return res;
  });
}

module.exports = {
  getListComment,
  getCommentDetail,
};
