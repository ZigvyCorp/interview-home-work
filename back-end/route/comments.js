const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");


const getAllComments = async (req, res, next) => {
    try {
      const comment = fs.readFileSync(path.join(__dirname, "../data/comments.json"));
      const comments = JSON.parse(comment);
  
      res.json(comments);
    } catch (e) {
      next(e);
    }
  };
  router.route("/").get(getAllComments);

  module.exports = router;