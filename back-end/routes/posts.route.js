const express = require("express");
const Controller = require("../controllers/posts.controller");
const router = express.Router();

router.get("/", Controller.listPost);
router.get("/:id", Controller.postDetail);

module.exports = router;
