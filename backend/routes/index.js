const express = require("express");
const router = express.Router();
const postCtrl = require("../controller/post")
const commentCtrl = require("../controller/comment")
const userCtrl = require("../controller/user")
// posts routes
router.get("/posts",postCtrl.apiGetAllPosts);
router.get("/posts/:id", postCtrl.apiGetPostByPage);
router.post("/posts", postCtrl.apiCreatePost);
router.put("/posts", postCtrl.apiUpdatePost); 


// comments routes
router.get("/comments/:id", commentCtrl.apiGetCommentByPostId);


// users routes
router.get("/users", userCtrl.apiGetUser);


module.exports = router;