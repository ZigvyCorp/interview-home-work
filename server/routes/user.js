const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

//  Get by id
router.get("/:id", userController.getUserById);

// Create
router.post("/", userController.createUser);

// Update
router.put("/:id", userController.updateUser);

// Delete
router.delete("/:id", userController.deleteUser);

module.exports = router;
