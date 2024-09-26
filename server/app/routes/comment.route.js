// Import Thư viện Express
const express = require("express");
// Import Controller
const {  createComment, getAllComment, getCommentById, updateCommentById, deleteCommentById } = require("../controllers/comment.controller");
// Khai báo router
const router = express.Router();

// Router tạo comment
router.post("/:userId",createComment)
// Router get all  comment
router.get("/",getAllComment)
// Router get comment
router.get("/:commentId",getCommentById)
// Router update comment
router.put("/:commentId",updateCommentById)
// Router delete comment
router.delete("/:commentId",deleteCommentById)
//
module.exports=router

