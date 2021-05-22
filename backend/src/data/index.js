const Post = require("./posts.json");
const User = require("./users.json");
const Comment = require("./comments.json");
const dbErrors = require("./errors");

const db = {
  models: {
    Post,
    User,
    Comment,
  },
};

module.exports = { db, dbErrors };
