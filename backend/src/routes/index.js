const express = require("express");
const router = express.Router();

router.use("/v1/api/posts", require("./posts"));
router.use("/v1/api/comments", require("./comments"));
router.use("/v1/api/users", require("./users"));

module.exports = router;
