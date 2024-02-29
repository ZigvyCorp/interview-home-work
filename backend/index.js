import http from "http";
import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

const server = http.createServer(app);
dotenv.config({
  path: "./config.env",
});
const port = process.env.PORT || 8000;
const connection = process.env.BDCONNECT;

mongoose
  .connect(connection, {})
  .then((con) => {
    console.log("Connect success");
  })
  .catch((err) => {
    console.log("Error connecting", err);
  });

server.listen(port, async () => {
  console.log("App running on port " + port);
});
