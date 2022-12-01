const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/postController");
const validatePost = require("../middleware/validatePost");

//[GET]
// /posts/all
router.get("/all", postCtrl.getPosts);
// /posts/:id
router.get("/:postId", postCtrl.getPostById);
// /posts
router.get("/", postCtrl.getPostsAndPaginate);
// /posts/:id/comments
//[POST]
// /posts/create
router.post("/create", validatePost.validateCreatePost(), postCtrl.cretePost);
//[PUT]
//api/post/:postId
router.post("/:postId", postCtrl.updatePost);
//[DELETE]
//api/post/:postId
router.delete("/:postId", postCtrl.deletePost);

module.exports = router;
