const express = require("express");
const { getList, getNameUser } = require("../controller/homepage.controller");
const router = express.Router();

router.get("/", getList);

module.exports = router;
