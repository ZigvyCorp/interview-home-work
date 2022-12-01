const express = require("express");
const { getList, getNameUser } = require("../controller/users.controller");
const router = express.Router();

router.get("/", getList);

module.exports = router;
