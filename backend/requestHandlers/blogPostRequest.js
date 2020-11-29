const mongoose = require("mongoose");
const _ = require("lodash");

const PostModel = mongoose.model("posts");

module.exports = (app) => {
  app.post("/", (req, res, next) => {
    const currentTime = Date.now();
    const owner =
      _.get(req, "body.info.name") || _.get(req, "body.info.username");
    const title = _.get(req, "body.info.title");
    const tags = _.get(req, "body.info.tags");
    const content = _.get(req, "body.info.content");
    if (!title || !content) {
      res.status(400).send({ error: "Missing title or contents" });
      return next();
    }
    if (!owner) {
      res.status(400).send({ error: "You're not authorized!" });
      return next();
    }
    PostModel({ owner, title, tags, content, created_at: currentTime }).save(
      (savePostErr) => {
        if (savePostErr) {
          res
            .status(400)
            .send({ error: "There is some error with creating a post" });
          return next(savePostErr);
        }
        res.send({ success: "Post created successfully!" });
        return next();
      }
    );
  });

  app.get("/", (req, res, next) => {
    PostModel.find({}, (err, posts) => {
      if (err) {
        res.status(404).send({ error: "Can't get posts" });
        return next(err);
      }
      res.json({ posts });
      return next();
    });
  });
};
