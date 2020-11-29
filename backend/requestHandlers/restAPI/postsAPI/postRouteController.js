const mongoose = require("mongoose");
const _ = require("lodash");

const PostModel = mongoose.model("posts");

module.exports = {
  getPosts: (req, res, next) => {
    const query = _.get(req, "query", {});
    console.log(query);
    PostModel.find(query, (err, data) => {
      if (err) {
        res.send({ error: "Operation not successful!" });
        return next(err);
      }
      res.json(data);
      return next();
    });
  },
  addPost: (req, res, next) => {
    const currentTime = Date.now();
    console.log(req.body);
    const owner = _.get(req, "body.owner");
    const title = _.get(req, "body.title");
    const tags = _.get(req, "body.tags", "");
    const content = _.get(req, "body.content");

    if (!title || !content || !owner) {
      res.send({ error: "Missing title/content/owner" });
      return;
    }

    PostModel({ owner, title, tags, content, created_at: currentTime }).save(
      (err) => {
        if (err) {
          res.send({ error: "Operation not successful!" });
          return next(err);
        }
        res.send({ message: "Create successfully!" });
        return next();
      }
    );
  },

  getDetailedPost: (req, res, next) => {
    const id = _.get(req, "params.postId", "");
    PostModel.findById({ _id: id }, (err, data) => {
      if (err) {
        res.send({ error: "Operation not successful!" });
        return next(err);
      }
      res.json(data);
      return next();
    });
  },

  update: (req, res, next) => {
    const id = _.get(req, "params.postId", "");

    PostModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      { useFindAndModify: false },
      (err, data) => {
        if (err) {
          res.send({ error: "Operation not successful!" });
          return next(err);
        }
        res.json(data);
        return next();
      }
    );
  },

  delete: (req, res, next) => {
    const id = _.get(req, "params.postId", "");
    PostModel.findByIdAndRemove(
      { _id: id },
      { useFindAndModify: false },
      (err, data) => {
        if (err) {
          res.send({ error: "Operation not successful!" });
          return next(err);
        }
        res.send({ message: "Delete successfully!" });
        return next();
      }
    );
  },
};
