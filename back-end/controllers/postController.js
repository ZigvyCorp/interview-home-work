const Post = require("../models/postModel");
const User = require("../models/userModel");
const Comment = require("../models/commentModel");
const axios = require("axios");
module.exports = {
  getAllData: async (req, res) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = response.data;
      res.json(posts);
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
  getAllPostsWithAuthorAndComments: async (req, res) => {
    try {
      // Lấy tất cả các bài post
      const postsResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = postsResponse.data;

      // Lấy tất cả các users
      const usersResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = usersResponse.data;

      // Lấy tất cả các comments
      const commentsResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const comments = commentsResponse.data;

      // Map users và comments vào các bài post tương ứng
      const postsWithAuthorAndComments = posts.map((post) => {
        const author = users.find((user) => user.id === post.userId);
        const postComments = comments.filter(
          (comment) => comment.postId === post.id
        );
        return {
          ...post,
          author: author ? author.name : "Unknown Author",
          comments: postComments,
        };
      });

      res.json(postsWithAuthorAndComments);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Failed to fetch posts with authors and comments" });
    }
  },
};
