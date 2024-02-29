const express = require("express");
const router = express.Router();
const {
  getUser,
  getPost,
  getComment,
  registerUser,
  fixComment,
  eraseComment,
  makeComment,
  makePost,
  fixPost,
  erasePost,
  validation,
  seekPostByPage,
  seekPostByTitle,
} = require("../controller/homePageController");

router.use(express.json());
// ! CRUD user
router.get("/user", getUser);
router.post("/user", registerUser);
router.post("/user/login", validation);
// ! CRUD comment
router.get("/comment", getComment);
router.post("/comment", makeComment);
router.put("/comment/update", fixComment);
router.delete("/comment", eraseComment);
// ! CRUD post
router.get("/post", getPost);
router.post("/post", makePost);
router.put("/post/update", fixPost);
router.delete("/post", erasePost);
router.post("/post/page", seekPostByPage);
router.post("/post/title", seekPostByTitle);
module.exports = router;
