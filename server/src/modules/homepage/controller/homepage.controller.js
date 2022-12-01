const HttpStatus = require("http-status");
const Users = require("../../users/model/users.model");
const Comments = require("../../comments/model/comments.model");
const Posts = require("../../posts/model/posts.model");

const getList = (req, res, next) => {
  Posts.find({})
    .then(async (posts) => {
      let count = 0
      for( let value of posts) {
        const total = await Comments.countDocuments({ postId: value.id })
        count = total
      }
      console.log('count: ', count);
      /* let count = 0
      posts.forEach(async (post) => {
        await Comments.countDocuments({postId: [...post].id})
        
      }) */

      res.render("home", {
        posts: [...posts, {totalComment: count}]
      })
    })
    .catch(next);
};

const getNumberCommnet = (req, res, next) => {
  Comments.aggregate([
    {
      $match: {},
      $lookup: {
        from: "",
      },
    },
  ]);
};

const getNameUser = (req, res, next) => {
  console.log("req.body.email: ", req.body.email);
  Users.findOne({ email: req.body.email })
    .then((name) =>
      res.render("header", {
        nameUser: name,
      })
    )
    .catch(next);
};

module.exports = {
  getList,
  getNameUser,
};
