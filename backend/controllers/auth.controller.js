const { validationResult } = require("express-validator");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const passport = require("passport");

const bcryptSalt = 10;

const signup = async (req, res) => {
  try {
    const passCheck = validationResult(req);

    if (!passCheck.isEmpty()) {
      res.status(400).json({ message: passCheck.errors });
      return;
    }

    const { username, password, name, email, role, dob } = req.body;

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    User.create({ username, password: hashPass, name, email, role, dob })
      .then((newUser) =>
        req.login(newUser, (err) =>
          err
            ? res.status(500).json({ message: "Login error" })
            : res
                .status(200)
                .json({ message: "Registration successful", user: newUser })
        )
      )
      .catch(() =>
        res
          .status(500)
          .json({ message: "Error saving user to DB. Please try again." })
      );
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
};

const login = (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: "Error authenticating user" });
      return;
    }
    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, (err) =>
      err
        ? res.status(500).json({ message: "Session error" })
        : res.status(200).json({ message: "Login successful", user: theUser })
    );
  })(req, res, next);
};

const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Error logging out" });
    }
    res.status(200).json({ message: "Log out success!" });
  });
};

const loggedin = (req, res) =>
  req.isAuthenticated()
    ? res.status(200).json(req.user)
    : res.status(403).json({ message: "Unauthorized" });

module.exports = { signup, login, logout, loggedin };
