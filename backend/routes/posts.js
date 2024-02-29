const ctrls = require("../controllers/posts");
const router = require("express").Router();

//get all posts
router.get("/", ctrls.getAllPosts);

//get posts by title
router.get("/search", ctrls.getPostByTitle);

//get post by id
router.get("/:bid", ctrls.getPostById);

module.exports = router;
