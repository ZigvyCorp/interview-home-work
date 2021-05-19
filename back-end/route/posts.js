const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");


const getAllPosts = async (req, res, next) => {
    try {
      const post = fs.readFileSync(path.join(__dirname, "../data/posts.json"));
      const posts = JSON.parse(post);
  
      res.json(posts);
    } catch (e) {
      next(e);
    }
};
router.route("/").get(getAllPosts);

module.exports = router;