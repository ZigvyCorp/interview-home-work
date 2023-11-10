const router = require("express").Router();
const cmtsController = require("../controllers/cmtsController");

//add cmt
router.post("/addCmt/:ownerId/:postId", cmtsController.addCmt);

//get all cmts
router.get("/comments", cmtsController.getAllCmts);

//delete cmt
router.get("/delete/:cmtId", cmtsController.deleteCmt);

//update cmt
router.put("/update/:cmtId", cmtsController.updateCmt);

module.exports = router;
