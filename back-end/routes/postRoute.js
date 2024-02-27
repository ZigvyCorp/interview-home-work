const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// Define routes
router.get("/", postController.getAllData);
router.get("/getAll", postController.getAllPostsWithAuthorAndComments);
router.get("/:id", postController.getDataById);

module.exports = router;
