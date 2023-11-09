const router = require("express").Router();
const postsController = require("../controllers/postsController");

router.post("/addPost", postsController.addPost);

module.exports = router;
