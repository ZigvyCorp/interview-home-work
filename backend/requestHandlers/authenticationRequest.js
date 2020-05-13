const mongoose = require("mongoose");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const saltRound = 11;

const UserModel = mongoose.model("users");

module.exports = (app) => {
  // LOG IN REQUEST
  app.post("/login", (req, res, next) => {
    const { username, password } = _.get(req, "body");
    if (!username || !password) {
      res.status(409).send({ message: "Missing input!" });
      return next();
    }
    UserModel.findOne({ username }, (dbErr, data) => {
      if (dbErr) {
        res.status(400).end();
        return next(dbErr);
      }

      if (!data) {
        res.status(409).send({ error: "User not found!" });
        return next();
      }

      const storedPassword = data.password;
      const { username, name, dob, created_at } = data;
      bcrypt.compare(password, storedPassword, (bcErr, isEqual) => {
        if (bcErr) {
          res.status(400).end();
          return next(bcErr);
        }

        // log in successfully
        if (!isEqual) {
          res.status(409).send({ error: "Password does not match!" });
          return next();
        }
        res.json({ username, name, birthdate: dob, created_at });
        return next();
      });
    });
  });

  // SIGN UP REQUEST
  app.post("/signup", (req, res, next) => {
    const { username, password, name, birthdate } = _.get(req, "body");
    if (!username || !password) {
      res.status(409).send({ error: "Missing input!" });
      return next();
    }
    UserModel.exists({ username }, (dbError, isExist) => {
      if (dbError) {
        res.status(400).end();
        return next(dbError);
      }
      if (isExist) {
        res.status(409).send({ error: "Username is already taken!" });
        return next();
      }

      bcrypt.hash(password, saltRound, (bcErr, hashPassword) => {
        if (bcErr) {
          res.status(400).end();
          return next(bcErr);
        }
        const currentTime = Date.now();
        UserModel({
          username,
          password: hashPassword,
          name,
          dob: birthdate,
          created_at: currentTime,
        }).save((saveUserErr) => {
          if (saveUserErr) {
            res.status(400).end();
            return next(saveUserErr);
          }
          // Sign up successfully
          res.json({ username, name, birthdate, created_at: currentTime });
          return next();
        });
      });
    });
  });
};
