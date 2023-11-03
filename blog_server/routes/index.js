const express = require("express");
const router = express.Router();

router.use("/users", require("./user.route"));
router.use("/posts", require("./post.route"));
router.use("/comments", require("./comment.route"));

module.exports = router;
