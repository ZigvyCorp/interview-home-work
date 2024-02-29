const ctrls = require("../controllers/fakeData");
const router = require("express").Router();
// const { verifyAccessToken, isAdmin } = require("../middleware/verifyToken");

//test route
router.get("/users", ctrls.fakeUsers);
router.get("/posts", ctrls.fakePosts);
router.get("/comments", ctrls.fakeComments);
module.exports = router;
