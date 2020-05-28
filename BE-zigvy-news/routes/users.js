const router = require("express").Router();
const bcrypt = require("bcrypt");
const modelGenerator = require("../utils/model-generator");
const jwtExtension = require("jsonwebtoken");
const passport = require("passport");
const constant = require("../utils/constant");

let User = require("../models/user");

// Get all users
router.get("/", async (req, res) => {
  try {
    let list = await User.find();
    res.json(list);
  } catch (e) {
    res.status(400).json("Error: " + e);
  }
});

// Login
router.post("/login", function (req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.json({
        error: info ? info.message : "Login failed.",
        user: user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.json({ error: err.message });
      }
      const token = jwtExtension.sign(user.toJSON(), constant.JWT_SECRET);
      return res.json({ user, token });
    });
  })(req, res);
});

// Register
router.put("/register", async (req, res) => {
  const { username, password, name, dob, images } = req.body;
  console.log("username, password, name, dob, images", username, password, name, dob, images);
  const saltRounds = 10;

  const image = images ? images : `${req.protocol}://${req.get("host")}/images/no-avatar.png`;

  try {
    const user = await User.findOne({ username });
    if (user) {
      res.json({ error: "This user has already existed" });
    } else {
      const hash = bcrypt.hashSync(password, saltRounds);
      const user = await modelGenerator.createUser(username,hash,name,image,new Date(dob));
      res.json(user);
    }
  } catch (e) {
    console.log(e);
    res.json({ error: e.message });
  }
});

router.post("/update", async (req, res) => {
  const { _id } = req.body;
  try {
    const user = await User.findOne({ _id });

    if (user) {
      for (let key in req.body) {
        const value = req.body[key];
        if (key === 'password' && value) {
          if (!bcrypt.compareSync(value, user[key]) && value !== '') {
            user[key] = bcrypt.hashSync(value, 10);
          }
        } else {
          if (user[key] === value) continue;
          user[key] = req.body[key];
        }
          
      }
      const result = await user.save();
      res.json(result);

    } else {
      res.json({ error: "User not found!" });
    }
  } catch(e) {
    res.json({ error: e.message })
  }
});

router.delete("/delete", async (req, res) => {
  const { _id } = req.body;
  try {
    const user = await User.findOne({ _id });
    if (user) {
      user.isDelete = true;
      const result = await user.save();
      res.json(result);

    } else {
      res.json({ error: "User not found!" });
    }
  } catch(e) {
    res.json({ error: e.message })
  }
});

module.exports = router;
