// const clientService = require("../services/client");
const AppError = require("../helpers/appError");
const clientService = require("../services/client");

module.exports = class Post {
  static async getPosts(req, res, next) {
    try {
      const posts = await clientService.get('https://jsonplaceholder.typicode.com/posts'); 
      if (!posts) {
        res.status(404).json("There are no posts found yet!");
      }
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async getPostById(req, res, next) {
    try {
      const posts = await clientService.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
      if (!posts) {
        res.status(404).json("Not found yet!");
      }
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async getCommentsOfPost(req, res, next) {
    try {
      const posts = await clientService.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}/comments`);
      if (!posts) {
        res.status(404).json("Not found yet!");
      }
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
