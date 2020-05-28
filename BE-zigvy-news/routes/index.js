const router = require("express").Router();
const passport = require('passport');
router.get("/", (req, res) => {
  res.send("Zigvy News API");
});

router.get("/profile", passport.authenticate("jwt", { session: false }), (req, res) => {
    const { authInfo } = req;
    if (authInfo) {
      res.json(req.authInfo);
    } else {
      res.json(null);
    }
  }
);

module.exports = router;
