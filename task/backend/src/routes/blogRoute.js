const express = require("express");
const router = express.Router();
const blogController = require("../app/controllers/blogController");

// createBlog

router.get("/", blogController.getBlogs);

module.exports = router;
