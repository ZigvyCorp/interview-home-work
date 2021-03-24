const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "wowwow";

// lets create our strategy for web token
let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log("payload received", jwt_payload);
  let user = getUser({ id: jwt_payload.id });

  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
// use the strategy
passport.use(strategy);

const app = express();
app.use(cors());

// initialize passport with express
app.use(passport.initialize());

// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// create some helper functions to work on the database
const createUser = async ({ name, password }) => {
  return await User.create({ name, password });
};

const getUser = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/users.json"));
    const users = JSON.parse(data);
    const playerUsers = users.find(
      player => player.username === String(req.params.username)
    );
    if (!playerUsers) {
      const err = new Error("User not found");
      err.status = 404;
      throw err;
    }
    res.json(playerUsers);
  } catch (e) {
    next(e);
  }
};
const getAllUsers = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/users.json"));
    const users = JSON.parse(data);

    res.json(users);
  } catch (e) {
    next(e);
  }
};
// get all users

const getUserByName = async obj => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/users.json"));
    const users = JSON.parse(data);
    const playerUsers = users.find(player => player.username === obj);
    if (!playerUsers) {
      const err = new Error("User not found");
      err.status = 404;
      throw err;
    }
    return playerUsers;
  } catch (e) {
    console.log(e);
  }
};
// set some basic routes
app.get("/", function(req, res) {
  res.json({ message: "Express is up!" });
});

app.route("/users").get(getAllUsers);
app.route("/:username").get(getUser);

// });
// register route
app.post("/register", function(req, res, next) {
  const { name, password } = req.body;
  createUser({ name, password }).then(user =>
    res.json({ user, msg: "account created successfully" })
  );
});

//login route
app.post("/login", async function(req, res) {
  const { username, password } = req.body;
  console.log({ username });
  console.log({ password });
  if (username && password) {
    // let user = await getUser({ username: username });
    // let user = app.route(`/:${username}`).get(getUser);
    let user = await getUserByName(username);
    console.log("userrrrrr", user);
    if (!user) {
      res.status(401).json({ message: "No such user found" });
    }
    if (user.password === password) {
      // from now on we'll identify the user by the id and the id is the
      // only personalized value that goes into our token
      let payload = { id: user.id };
      let token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.json({ msg: "ok", token: token });
    } else {
      res.status(401).json({ msg: "Password is incorrect" });
    }
  }
});

// protected route
app.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  function(req, res) {
    res.json("Success! You can now see this without a token.");
  }
);

module.exports = app;
