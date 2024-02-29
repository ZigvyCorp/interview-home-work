const express = require("express");
const router = express.Router();
const CommentModel = require("../models/comment.model");

router.route("/").get((req, res) => {
  CommentModel.find({})
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
