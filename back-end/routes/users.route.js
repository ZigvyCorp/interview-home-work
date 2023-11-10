const express = require("express");
const Controller = require("../controllers/users.controller");
const router = express.Router();

router.get("/", Controller.listUser);

module.exports = router;
