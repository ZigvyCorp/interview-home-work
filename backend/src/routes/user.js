const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();

//THEM USER
router.post("/adduser",userController.addUser);
router.get("/getallusers",userController.getAllusers);
router.get("/getuser", userController.getUser);
router.put("/updateuser", userController.updateUser);
router.delete("/deleteuser",userController.deleteUser);
module.exports = router;