const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const cors = require("cors");
router.use(cors());

const getPosts = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/posts.json"));
    const posts = JSON.parse(data);
    const plPosts = posts.find(player => player.id === Number(req.params.id));
    if (!plPosts) {
      const err = new Error("User not found");
      err.status = 404;
      throw err;
    }
    res.json(plPosts);
  } catch (e) {
    next(e);
  }
};

const getAllPosts = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/posts.json"));
    const posts = JSON.parse(data);

    res.json(posts);
  } catch (e) {
    next(e);
  }
};

const createPosts = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/posts.json"));
    const posts = JSON.parse(data);
    const newUser = {
      id: req.body.id,
      create_at: Date.now(),
      owner: req.body.id,
      title: req.body.title,
      content: req.body.content,
      created_at: Date.now(),
      tags: req.body.tags
    };
    posts.push(newUser);
    fs.writeFileSync(
      path.join(__dirname, "../data/posts.json"),
      JSON.stringify(posts)
    );
    res.status(201).json(newUser);
  } catch (e) {
    next(e);
  }
};

const updatePosts = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/posts.json"));
    const posts = JSON.parse(data);
    const plPosts = posts.find(player => player.id === Number(req.params.id));
    if (!plPosts) {
      const err = new Error("Posts not found");
      err.status = 404;
      throw err;
    }
    const newPostsData = {
      id: req.body.id,
      create_at: Date.now(),
      owner: req.body.id,
      title: req.body.title,
      content: req.body.content,
      created_at: Date.now(),
      tags: req.body.tags
    };
    const newPosts = posts.map(player => {
      if (player.id === Number(req.params.id)) {
        return newPostsData;
      } else {
        return player;
      }
    });
    fs.writeFileSync(
      path.join(__dirname, "../data/posts.json"),
      JSON.stringify(newPosts)
    );
    res.status(200).json(newPostsData);
  } catch (e) {
    next(e);
  }
};

const deletePosts = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/posts.json"));
    const posts = JSON.parse(data);
    const playerPosts = posts.find(
      player => player.id === Number(req.params.id)
    );
    if (!playerPosts) {
      const err = new Error("posts not found");
      err.status = 404;
      throw err;
    }
    const newPosts = posts
      .map(player => {
        if (player.id === Number(req.params.id)) {
          return null;
        } else {
          return player;
        }
      })
      .filter(player => player !== null);
    fs.writeFileSync(
      path.join(__dirname, "../data/posts.json"),
      JSON.stringify(newPosts)
    );
    res.status(200).end();
  } catch (e) {
    next(e);
  }
};

router
  .route("/:id")
  .get(getPosts)
  .put(updatePosts);
router.route("/").post(createPosts);
router.route("/").get(getAllPosts);

router.route("/:id").get(getPosts);
router
  .route("/:id")
  .get(getPosts)
  .put(updatePosts)
  .delete(deletePosts);

module.exports = router;
