var express = require("express");
const {
  createUser,
  deleteUserById,
  updateUserById,
  findUsers,
  findUserById,
} = require("../controllers/userController");

let router = express.Router();
router.get("/", findUsers);
router.get("/:id", findUserById);
router.post("/", createUser);
router.put("/", updateUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
