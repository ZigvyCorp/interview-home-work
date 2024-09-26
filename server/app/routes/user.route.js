// Import Thư viện Express
const express = require("express");
// Import Controller
const { getAllUser, createUser, getUserById, updateUserById, deleteUserById } = require("../controllers/user.controller");

// var router
const router = express.Router();
// Router create product type
router.post("/",createUser)
// Router get all  product type
router.get("/",getAllUser)
// Router lấy user bằng Id
router.get("/:userId/", getUserById)
// Router sua user bằng Id
router.put("/:userId/", updateUserById)
// Router sua user bằng Id
router.delete("/:userId/", deleteUserById)
// Router login
module.exports=router
