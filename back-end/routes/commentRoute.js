const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// Define routes
router.get("/", commentController.getAllData);
router.get("/:id", commentController.getDataById);

module.exports = router;
