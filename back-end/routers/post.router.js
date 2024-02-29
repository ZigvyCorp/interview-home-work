const express = require("express");
const router = express.Router();
const PostModel = require("../models/post.model");

router.route("/").get((req, res) => {
  PostModel.find({})
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
