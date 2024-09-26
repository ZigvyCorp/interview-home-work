// Import Thư viện Express
const express = require("express");
const { createPost, getAllPost, getPostById, updatePostById, deletePostById } = require("../controllers/post.controller");

// var router
const router = express.Router();
// Router create Post
router.post("/:authorId/",createPost)
router.get("/",getAllPost)
router.get("/:postId",getPostById)
router.put("/:postId",updatePostById)
router.delete("/:postId",deletePostById)

module.exports=router
