const express = require("express");

const {
    createPost,
    getAllPost,
    deletePost,
    updatePost,
    getPost
} = require("../controllers/postController");

const router = express.Router();


router.post("/createPost", createPost);
router.get("/post", getAllPost);
router.get("/post/:id", getPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

module.exports = router

