const express = require("express");
const router = express.Router();
const IdValidator = require("../validators/id.validator");
const controller = require("../controllers/user.controller");

router.get("/", controller.getUsers);
router.get("/:id", IdValidator, controller.getById);

module.exports = router;
