const users = require('../data/users.json');
const posts = require('../data/posts.json');
const comments = require('../data/comments.json');

global.db = {
  users,
  posts,
  comments,
};
