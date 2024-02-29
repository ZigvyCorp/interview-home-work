const router = require("express").Router();
const postController = require("../controller/post");

router.get("/getPostById/:pId", postController.getPostById);
router.get("/getAllPosts", postController.getAllPosts);
router.get("/getCommentByPostId/:pId", postController.getCommentByPostId);

router.post("/createPost", postController.createPost);

router.put("/updatePostById/:pId", postController.updatePost);


module.exports = router;
