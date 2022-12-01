const express = require("express");
const { getList } = require("../controller/comments.controller");
const router = express.Router();

router.get("/", getList);

module.exports = router;
