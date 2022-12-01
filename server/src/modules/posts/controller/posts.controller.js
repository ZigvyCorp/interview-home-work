const HttpStatus = require("http-status");
const Posts = require("../model/posts.model");

const getList = (req, res, next) => {
  Posts.find({})
    .then((posts) => {
      posts.forEach((ele)=> {
        res.render("home", {
          posts,
          title: ele.title
        });
      })
      
    })
    .catch(next);
};

module.exports = {
  getList,
};
