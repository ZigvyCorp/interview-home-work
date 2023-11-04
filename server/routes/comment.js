const express = require("express");
const commentControllers = require("../controllers/comment");
const router = express.Router();

router.get("/", commentControllers.getComments);

module.exports = router;
