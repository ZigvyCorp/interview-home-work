const router = require("express").Router();
const roleController = require("../controllers/roleController");

//ADD ROLE
router.post("/", roleController.addRole);

module.exports = router;
