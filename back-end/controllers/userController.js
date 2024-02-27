// module1Controller.js
const postSchema = require("../models/userModel");
const axios = require("axios");
module.exports = {
  getAllData: async (req, res) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = response.data;
      res.json(users);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Failed to fetch posts from JSONPlaceholder API" });
    }
  },
  getDataById: async (req, res) => {
    const userId = req.params.id;

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const post = response.data;
      res.json(post);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: `Failed to fetch post with id ${userId}` });
    }
  },
};
