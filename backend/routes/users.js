const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const cors = require("cors");

router.use(cors());

const getUsers = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/users.json"));
    const users = JSON.parse(data);
    const playerUsers = users.find(
      player => player.id === Number(req.params.id)
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

const createUsers = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/users.json"));
    const users = JSON.parse(data);
    const newUser = {
      id: req.body.id,
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      dob: req.body.dob,
      create_at: Date.now()
    };
    users.push(newUser);
    fs.writeFileSync(
      path.join(__dirname, "../data/users.json"),
      JSON.stringify(users)
    );
    res.status(201).json(newUser);
  } catch (e) {
    next(e);
  }
};

const updateUsers = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/users.json"));
    const users = JSON.parse(data);
    const playerUsers = users.find(
      player => player.id === Number(req.params.id)
    );
    if (!playerUsers) {
      const err = new Error("Users not found");
      err.status = 404;
      throw err;
    }
    const newUsersData = {
      id: req.body.id,
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      dob: req.body.dob,
      create_at: Date.now()
    };
    const newUsers = users.map(player => {
      if (player.id === Number(req.params.id)) {
        return newUsersData;
      } else {
        return player;
      }
    });
    fs.writeFileSync(
      path.join(__dirname, "../data/users.json"),
      JSON.stringify(newUsers)
    );
    res.status(200).json(newUsersData);
  } catch (e) {
    next(e);
  }
};

const deleteUsers = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/users.json"));
    const users = JSON.parse(data);
    const playerUsers = users.find(
      player => player.id === Number(req.params.id)
    );
    if (!playerUsers) {
      const err = new Error("users not found");
      err.status = 404;
      throw err;
    }
    const newUsers = users
      .map(player => {
        if (player.id === Number(req.params.id)) {
          return null;
        } else {
          return player;
        }
      })
      .filter(player => player !== null);
    fs.writeFileSync(
      path.join(__dirname, "../data/users.json"),
      JSON.stringify(newUsers)
    );
    res.status(200).end();
  } catch (e) {
    next(e);
  }
};

router
  .route("/:id")
  .get(getUsers)
  .put(updateUsers);
router.route("/").post(createUsers);
router.route("/").get(getAllUsers);
router.route("/:id").get(getUsers);
router
  .route("/:id")
  .get(getUsers)
  .put(updateUsers)
  .delete(deleteUsers);

module.exports = router;
