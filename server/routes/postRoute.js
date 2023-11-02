const express = require("express");

const {
    searchBlog,
    createPost,
    getAllPost,
    deletePost,
    updatePost
} = require("../controllers/postController");

const router = express.Router();

router.get("/search", searchBlog);
router.post("/createPost", createPost);
router.get("/post", getAllPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

module.exports = router

