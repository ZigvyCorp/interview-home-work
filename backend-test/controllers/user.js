const clientService = require("../services/client");

module.exports = class User {
  static async getUsers(req, res, next) {
    try {
      const posts = await clientService.get('https://jsonplaceholder.typicode.com/users'); 
      if (!posts) {
        res.status(404).json("There are no posts found yet!");
      }
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
