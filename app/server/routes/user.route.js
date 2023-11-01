const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.post("/create", userController.create);
router.route("/:id").get(userController.getOne).patch(userController.update).delete(userController.delete);

module.exports = router;
