const router = require("express").Router();
const postsController = require("../controllers/postsController");

//add post
router.post("/addPost", postsController.addPost);

//get all posts
router.get("/posts", postsController.getAllPosts);

//find by id
router.get("/:postId", postsController.getPostById);

//delete by id
router.get("/delete/:postId", postsController.deletePost);

//update post
router.put("/update/:postId", postsController.updatePost);

module.exports = router;
