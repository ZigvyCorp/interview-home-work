const express = require("express");
const CONNECT_DB = require("./src/config/mongodb");
const webRoute = require("./src/routes/router");
require("dotenv").config();
const cors = require("cors");
const START_SERVER = () => {
  const app = express();

  const port = process.env.PORT;
  const hostname = process.env.HOSTBACKEND;
  app.use(cors());
  app.use(webRoute);

  // Start the server
  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
  });
};

CONNECT_DB()
  .then(() => {
    "Connected Success";
  })
  .then(() => START_SERVER())
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });
