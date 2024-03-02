const api = require("express").Router();
const userController = require("../controllers/userController");

const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

api.get("/api/users", use(userController.getUsers));

module.exports = api;
