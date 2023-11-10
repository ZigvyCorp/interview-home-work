const router = require("express").Router();
const usersController = require("../controllers/usersController");

//add user
router.post("/addUser", usersController.addUser);

//get all users
router.get("/users", usersController.getAllUsers);

//get user by username
router.get("/username/:username", usersController.getUser);

module.exports = router;
