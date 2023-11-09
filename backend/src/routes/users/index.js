const express = require("express");
const router = express.Router();
const { asyncHandle } = require("../../utils");
const userConroller = require("../../controllers/user.controller");

router.get("/", asyncHandle(userConroller.getListUser));

router.get("/:id", asyncHandle(userConroller.getUserById));

module.exports = router;
