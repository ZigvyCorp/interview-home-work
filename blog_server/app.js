const connectDB = require("./config/db.config");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config();
connectDB();
const app = express();

//config cors
app.use(cors());

//config routes
app.use("/api", require("./routes"));

module.exports = app;
