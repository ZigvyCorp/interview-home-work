const router = require("express").Router();
const ctrls = require("../controllers/commentController");

router.post("/", ctrls.createComment);
router.get("/", ctrls.getComments);

router.put("/:id", ctrls.updateComment);
router.delete("/:id", ctrls.deleteComment);
router.get("/:id", ctrls.getComment);

module.exports = router;
