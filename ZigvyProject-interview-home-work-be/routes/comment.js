const router = require("express").Router();
const commentController = require("../controller/comment");

// router.get("/getUserByPostId/:pId", commentController.createComment);
router.post("/createComment", commentController.createComment);

// router.put("/updateUserById/:uId", userController.updateUserById);

module.exports = router;
