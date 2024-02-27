const router = require("express").Router();
const ctrls = require("../controllers/userController");

router.post("/", ctrls.createUser);
router.get("/", ctrls.getUsers);

router.put("/:id", ctrls.updateUser);
router.delete("/:id", ctrls.deleteUser);
router.get("/:id", ctrls.getUser);

module.exports = router;
