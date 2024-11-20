const router = require("express").Router();
const ctrls = require("../controllers/postController");

router.post("/", ctrls.createPost);
router.get("/", ctrls.getPosts);

router.put("/:id", ctrls.updatePost);
router.delete("/:id", ctrls.deletePost);
router.get("/:id", ctrls.getPost);

module.exports = router;
