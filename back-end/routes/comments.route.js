const express = require("express");
const Controller = require("../controllers/comments.controller");
const router = express.Router();

router.get("/", Controller.listComment);

module.exports = router;
