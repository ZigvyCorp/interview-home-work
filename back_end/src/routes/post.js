const router = require("express").Router();
const postController = require("../controllers/PostController");

//ADD POST
router.post("/", postController.addPost);

//GET ALL POST
router.get("/", postController.getAllPosts);

// SEARCH POSTS
router.get("/search", postController.searchPosts);

// GET POST BY ID
router.get("/:id", postController.getPostById);



module.exports = router;
