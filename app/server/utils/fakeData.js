const axios = require("axios");
const User = require("../models/user.schema");
const Post = require("../models/post.schema");
const Comment = require("../models/comment.schema");

exports.fake = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
  for await (item of res.data) {
    await Comment.create({
      ...item,
    });
  }
};
