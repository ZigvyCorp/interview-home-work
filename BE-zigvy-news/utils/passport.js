const constant = require("../utils/constant");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const passportLocal = require("passport-local");

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = passportLocal.Strategy;

const User = require("../models/user");

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

const jwt = new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: constant.JWT_SECRET,
  },
  function (jwtPayload, cb) {
    return User.findById(jwtPayload._id)
      .then((user) => {
        return cb(null, true, user);
      })
      .catch((err) => {
        return cb(err);
      });
  }
);

const local = new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password",
  },
  function (username, password, cb) {
    return User.findOne({ username })
      .then((user) => {
        if (!user) {
          return cb(null, false, { message: "Incorrect username or password." });
        }
        bcrypt.compare(password, user.password).then((result) => {
          if (result) {
            return cb(null, user, { message: "Logged In Successfully" });
          } else {
            return cb(null, false, { message: "Incorrect password!" });
          }
        });
      })
      .catch((err) => cb(err));
  }
);

passport.use(jwt);
passport.use(local);
