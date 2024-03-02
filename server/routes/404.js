const api = require("express").Router();

api.use("/api/*", function (req, res, next) {
  return res.status(404).json({
    message: "Route not found",
  });
});

module.exports = api;
