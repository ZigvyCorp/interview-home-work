const HttpStatus = require("http-status");
const Comments = require("../model/comments.model");

const getList = (req, res, next) => {
  Comments.find({})
    .then((comments) => {
      res.render("home", {
        posts: comments[0].postId,
      });
    })
    .catch(next);
};

module.exports = {
  getList,
};
