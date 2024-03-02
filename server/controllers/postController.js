const { default: axios } = require("axios");

const getPosts = async (req, res) => {
  const { data: posts } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return res.json({
    posts: posts,
  });
};

const getPostComments = async (req, res) => {
  const { id } = req.params;

  const { data: comments } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return res.json({
    comments: comments,
  });
};

module.exports = {
  getPosts,
  getPostComments,
};
