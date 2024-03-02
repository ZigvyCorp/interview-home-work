const api = require("express").Router();
const userController = require("../controllers/userController");

const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

api.get("/api/users/:id", use(userController.getUserById));

module.exports = api;
