const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const userCtrl = {};

// handler sign up action
userCtrl.add = (req, res, next) => {
  const { username, password, name, birthDate } = req.body;
  if (!username || !password) {
    return res
      .status(406)
      .send({ error: "Sign Up Failed: Invalid username or password !" });
  }

  UserModel.findOne({ username: username }, (err, userEx) => {
    if (err) {
      res.status(500).end();
      return next(err);
    }

    if (userEx) {
      return res
        .status(409)
        .send({ error: `Username ${userEx.username} already exists !` });
    } else {
      bcrypt.hash(password, 8, passHashCB);

      function passHashCB(err, passHash) {
        if (err) {
          res.status(400).end();
          return next(err);
        } else {
          // add User => doc
          let user = new UserModel({
            username: username,
            password: passHash,
            name: name,
            dob: birthDate,
            created_at: Date.now(),
          });
          user.save((saveErr, userAdd) => {
            if (saveErr) {
              res.status(400).end();
              return next(saveErr);
            }
            res.json(userAdd);
          });
        }
      }
    }
  });
};
// handler sign in action
userCtrl.login = (req, res, next) => {
  const { username, password } = req.body;

  UserModel.findOne({ username: username }, (err, user) => {
    if (err) {
      res.status(500).end();
      return next(err);
    }
    if (!user) {
      res.status(404).send({ err: "User not found !" });
      return next();
    } else {
      const { name, dob, created_at, _id } = user;
      bcrypt.compare(password, user.password, doMatchPassCB);

      function doMatchPassCB(err, isMatch) {
        if (err) {
          res.status(400).end();
          return next(err);
        }

        if (isMatch) {
          res.json({ id:_id,username, name, birthDate: dob, created_at });
        } else {
          res.status(409).send({ err: "Invalid username or password" });
          return next();
        }
      }
    }
  });
};

// handler update profile action
userCtrl.update = async (req, res, next) => {
  let id = req.params.id;
  let { password } = req.body;
  if (password) {
    let passHash = await bcrypt.hash(password, 8);
    req.body.password = passHash;
  }
  UserModel.findByIdAndUpdate(id, req.body, (err, user) => {
    if (err) {
      res.status(400).send({ error: "Update user profile failure !" });
      return next(err);
    }
    if (!user) {
      res.status(404).send('error: "USer not found "');
      return next();
    }
    res.send({ message: "Update successful !" });
  });
};

module.exports = userCtrl;
