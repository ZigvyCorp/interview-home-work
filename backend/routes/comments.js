const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const getComments = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/comments.json"));
    const comments = JSON.parse(data);
    const playerComments = comments.find(
      player => player.id === Number(req.params.id)
    );
    if (!playerComments) {
      const err = new Error("Comment not found");
      err.status = 404;
      throw err;
    }
    res.json(playerComments);
  } catch (e) {
    next(e);
  }
};

const createComments = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/comments.json"));
    const comments = JSON.parse(data);
    const newComment = {
      id: req.body.id,
      owner: req.body.owner,
      post: req.body.post,
      content: req.body.content,
      create_at: Date.now()
    };
    comments.push(newComment);
    fs.writeFileSync(
      path.join(__dirname, "../data/comments.json"),
      JSON.stringify(comments)
    );
    res.status(201).json(newComment);
  } catch (e) {
    next(e);
  }
};

const updateComments = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/comments.json"));
    const comments = JSON.parse(data);
    const playerComments = comments.find(
      player => player.id === Number(req.params.id)
    );
    if (!playerComments) {
      const err = new Error("Comments not found");
      err.status = 404;
      throw err;
    }
    const newCommentsData = {
      id: req.body.id,
      owner: req.body.owner,
      post: req.body.post,
      content: req.body.content,
      create_at: Date.now()
    };
    const newComments = comments.map(player => {
      if (player.id === Number(req.params.id)) {
        return newCommentsData;
      } else {
        return player;
      }
    });
    fs.writeFileSync(
      path.join(__dirname, "../data/comments.json"),
      JSON.stringify(newComments)
    );
    res.status(200).json(newCommentsData);
  } catch (e) {
    next(e);
  }
};

const deleteComments = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/comments.json"));
    const comments = JSON.parse(data);
    const playerComments = comments.find(
      player => player.id === Number(req.params.id)
    );
    if (!playerComments) {
      const err = new Error("comments not found");
      err.status = 404;
      throw err;
    }
    const newComments = comments
      .map(player => {
        if (player.id === Number(req.params.id)) {
          return null;
        } else {
          return player;
        }
      })
      .filter(player => player !== null);
    fs.writeFileSync(
      path.join(__dirname, "../data/comments.json"),
      JSON.stringify(newComments)
    );
    res.status(200).end();
  } catch (e) {
    next(e);
  }
};

router
  .route("/:id")
  .get(getComments)
  .put(updateComments);
router.route("/").post(createComments);
router.route("/:id").get(getComments);
router
  .route("/:id")
  .get(getComments)
  .put(updateComments)
  .delete(deleteComments);

module.exports = router;
