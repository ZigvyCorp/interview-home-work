const ctrls = require("../controllers/comments");
const router = require("express").Router();

//get comments by post id
router.get("/:bid", ctrls.getCommentsByPostId);

//get count comments by post id
router.get("/count/:bid", ctrls.getCommentCountByPostId);

module.exports = router;
