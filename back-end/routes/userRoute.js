const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Define routes
router.get("/", userController.getAllData);
router.get("/:id", userController.getDataById);

module.exports = router;
