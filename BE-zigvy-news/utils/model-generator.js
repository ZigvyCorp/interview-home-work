const User = require('../models/user');
const Post = require('../models/post');
const Comment = require('../models/comment');

const mongoose = require("mongoose");

module.exports = {
  createUser: (username, password, name, images, dob) => {
    var user = new User({
      _id: new mongoose.Types.ObjectId(),
      username,
      password,
      name,
      images,
      dob,
      isDelete: false
    });
    user.save().then(result => result).catch(error => console.log(error));
    return user._doc;
  },

  createPost: (_idOwner, title, content, images, tags) => {
    var post = new Post({
      _id: new mongoose.Types.ObjectId(),
      _idOwner,
      title,
      content,
      images,
      tags,
      isDelete: false
    });
    post.save().then(result => result).catch(error => console.log(error));
    return post._doc;
  },

  createComment: (_idOwner, _idPost, content) => {
    var comment = new Comment({
      _id: new mongoose.Types.ObjectId(),
      _idOwner,
      _idPost,
      content,
      isDelete: false
    });
    comment.save().then(result => result).catch(error => console.log(error));
    return comment._doc;
  },
}
