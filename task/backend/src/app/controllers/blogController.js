const Blog = require("../models/Blog");

const blogController = {
  getBlogs: async (req, res) => {
    try {
      const postsBlog = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      ).then((response) => response.json());

      const userBlog = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      ).then((response) => response.json());

      const commentBlog = await fetch(
        "https://jsonplaceholder.typicode.com/comments",
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      ).then((response) => response.json());

      const result = postsBlog.map((post) => {
        let user = userBlog.find((u) => u.id === post.userId);
        let comment = commentBlog.filter((c) => c.postId === post.id);
        return {
          ...post,
          ...user,
          comments: comment,
        };
      });

      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
module.exports = blogController;
