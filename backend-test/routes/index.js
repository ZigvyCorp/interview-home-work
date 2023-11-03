const express = require("express");
const router = express.Router();  
const postCtrl = require("../controllers/post");
const userCtrl = require("../controllers/user");

router.get("/posts", postCtrl.getPosts);
router.get("/posts/:id", postCtrl.getPostById);
router.get("/posts/:id/comments", postCtrl.getCommentsOfPost);

router.get("/users", userCtrl.getUsers);

module.exports = router;
