const express = require("express");
const mongoose = require("mongoose");
const { MONGODB } = require("./config");
const routesIndex = require("./routes/index");
const routesDetail = require("./routes/detail");

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const app = express();
    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      next();
    });
    app.use("/api", routesIndex);
    app.use("/api", routesDetail);

    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
