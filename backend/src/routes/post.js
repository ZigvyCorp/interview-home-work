const postController = require("../controllers/postController");

const router = require("express").Router();

//THEM POST
router.post("/upPost", postController.postPost);
router.get("/getallposts", postController.getAllpost);
router.get("/getpost", postController.getPost);
router.put("/updatepost",postController.updatePost);
router.delete("/deletepost",postController.deletePost);
module.exports = router;
