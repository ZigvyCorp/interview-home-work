const { getPosts, getPostById } = require("../repositories/posts.repository");
const { getPostComments } = require("../repositories/comments.repository");

// TODO: will need proper validation if this is production code
const getPostsSummaries = (page = 1, size = 10, search = "") => {
  return getPosts(page, size, search);
};

const getPostDetailById = (id) => {
  return getPostById(id);
}

const getPostCommentsByPostId = (id) => {
  return getPostComments(id);
}

module.exports = {
  getPostsSummaries,
  getPostDetailById,
  getPostCommentsByPostId
}



