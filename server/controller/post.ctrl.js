const PostModel = require("../model/post.model");
const _ = require("lodash");
const credentials = require("../util/credentials");

const postCtrl = {};

// CURD POST
postCtrl.addPost = (req, res, next) => {
  let { title, content, ownerId, tags } = req.body;
  if (!ownerId || !title || !content) {
    res.status(406).send({ error: "Post: Invalid Text, title or Owner !" });
    return next();
  }

  let post = new PostModel({
    title: title,
    content: content,
    owner: ownerId,
    comments: [],
    created_at: Date.now(),
    tags: _.isArray(tags) ? tags : [],
  });

  post.save((err, result) => {
    if (err) {
      res.status(400).send({ error: "Failure to create post" });
      return next(err);
    }
    res.json(result);
  });
};

postCtrl.getPost = (req, res, next) => {
  let { postId, userId } = req.params;

  PostModel.findById(postId).exec((err, post) => {
    if (!post) {
      res.status(404).send({ error: "Post not found " });
      return next();
    }
    let { owner } = post;
    let isAuthorized = credentials(userId, owner);
    if (isAuthorized) {
      res.json(post);
    } else {
      res.status(403).send({ error: "Not authorized to access this resource." });
      return next();
    }
  });
};

postCtrl.getAll = (req, res, next) => {
  PostModel.find({}).populate({
    path:'owner', select : 'name username _id'
}).exec((err, listPost) => {
    if (err) {
      res.status(404).send({error: 'Failure to get list Post!'});
      return next(err);
    }
    
    res.json(listPost);
  });
};

postCtrl.update = (req, res, next) => {
  let { _id: postId, userId, ownerId } = req.body;
  let isAuthorized = credentials(userId, ownerId);
  if (isAuthorized) {
    PostModel.findByIdAndUpdate(postId, req.body, (err, post) => {
      if (err) {
        res.status(400).send({ error: "Update Post failure !" });
        return next(err);
      }

      if (!post) {
        res.status(404).send({ error: "Post not found " });
        return next();
      }
      res.send({ message: "Update successful !" });
    });
  } else {
    res.status(403).send({ error: "Not authorized to access this resource." });
    return next();
  }
};

postCtrl.delete = (req, res, next) => {
  let { postId, userId } = req.body;
  PostModel.findById(postId).exec((err, post) => {
    if (err) {
      res.status(400).send({ error: "Delete post failure !" });
      return next(err);
    }

    if (!post) {
      res.status(404).send({ error: "Post not found !" });
      return next();
    } else {
      let isAuthorized = credentials(userId, post.owner.toString());
      if (isAuthorized) {
        PostModel.deleteOne({ _id: post._id }, (err) => {
          if (err) {
            res.status(400).send({ error: "Delete Post failure !" });
            return next(err);
          }
          res.send({ message: "Delete successful !" });
        });
      } else {
        res
          .status(403)
          .send({ error: "Not authorized to access this resource." });
        return next();
      }
    }
  });
};
//End CURD post

// CURD comment by user
postCtrl.addComment = (req, res, next) => {
  let { postId, userId, comment } = req.body;
  PostModel.findById(postId).exec((err, post) => {
    if (err) {
      res.status(400).send({ error: "Comment failure !" });
      return next(err);
    }
    if (!post) {
      res.status(404).send({ error: "Post not found !" });
      return next();
    }

    let commentArr = [...post.comments];
    commentArr.push({
      owner: userId,
      text: comment,
      create_at: Date.now(),
    });

    post.comments = commentArr;
    post.save((err, postResult) => {
      if (err) {
        res.status(400).send({ error: "Comment failure !" });
        return next(err);
      }
      res.send({ message: "Comment success !" });
    });
  });
};

postCtrl.updateComment = (req, res, next) => {
  let { postId, userId, commentId, content } = req.body;
  PostModel.findById(postId).exec((err, post) => {
    if (err) {
      res.status(400).send({ error: "Comment failure !" });
      return next(err);
    }
    if (!post) {
      res.status(404).send({ error: "Post not found" });
      return next();
    }
    // find userId create cmt 
    let cmtIdx =  _.findIndex(post.comments, (comment)=>{
      return comment._id.toString() === commentId.toString();
    });

    if(cmtIdx === -1){
        res.status(404).send({error: "Comment not found !"});
        return next();
    }

    let cmt = post.comments[cmtIdx];
    let {owner: ownerCmtId} = cmt;
    // end find userId create cmt
    let isAuthorized = credentials(userId, ownerCmtId);
    if (isAuthorized) {
      let commentArr = [...post.comments];
      let idx = _.findIndex(commentArr, (value) => {
        return value._id.toString() === commentId.toString();
      });
      if (idx > -1) {
        commentArr[idx].text = content;
        post.comments = commentArr;
        post.save((err, postResult) => {
          if (err) {
            res.status(400).send({ error: "Edit comment failure !" });
            return next(err);
          }
          res.send({ message: "Edit comment success !" });
        });
      } else {
        res.status(404).send({ error: "Edit comment failure!" });
        return next(err);
      }
    } else {
      res.status(403).send({ error: "Not authorized to access this resource." });
      return next();
    }
  });
};

postCtrl.deleteComment = (req, res, next) => {
  let { postId, userId, commentId } = req.body;
  PostModel.findById(postId).exec((err, post) => {
    if (err) {
      res.status(400).send({ error: "Comment failure !" });
      return next(err);
    }
    if (!post) {
      res.status(404).send({ error: "Post not found " });
      return next();
    }
     // find userId create cmt 
     let cmtIdx =  _.findIndex(post.comments, (comment)=>{
      return comment._id.toString() === commentId.toString();
    });

    if(cmtIdx === -1){
        res.status(404).send({error: "Comment not found !"});
        return next();
    }
    let cmt = post.comments[cmtIdx];
    let {owner: ownerCmtId} = cmt;
    // end find userId create cmt

    let isAuthorized = credentials(userId, ownerCmtId);
    if (isAuthorized) {
      let commentArr = [...post.comments];
      let idx = _.findIndex(commentArr, (value) => {
        return value._id.toString() === commentId.toString();
      });
      if (idx > -1) {
        commentArr.splice(idx, 1);
        post.comments = commentArr;
        post.save((err, postResult) => {
          if (err) {
            res.status(400).send({ error: "Delete comment failure !" });
            return next(err);
          }
          res.send({ message: " Delete comment success !" });
        });
      } else {
        res.status(400).send({ error: "Delete comment failure !" });
        return next(err);
      }
    } else {
      res.status(403).send({ error: "Not authorized to access this resource." });
      return next();
    }
  });
};
// end CURD comment by user

module.exports = postCtrl;
