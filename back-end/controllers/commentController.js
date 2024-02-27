const postSchema = require("../models/postModel");
const axios = require("axios");
module.exports = {
  getAllData: async (req, res) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const comments = response.data;
      res.json(comments);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Failed to fetch posts from JSONPlaceholder API" });
    }
  },
  getDataById: async (req, res) => {
    const postId = req.params.id;

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const post = response.data;
      res.json(post);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: `Failed to fetch post with id ${postId}` });
    }
  },
};
