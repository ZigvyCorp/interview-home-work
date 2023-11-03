const express = require("express");
const { getComments } = require("../controllers/comment.controller");

const router = express.Router();

router.get("/", getComments);

module.exports = router;
