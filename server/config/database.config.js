const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const urlDatabase = process.env.MONGOLAB_URI;
const connect = async () => {
  try {
    await mongoose
      .connect(urlDatabase, { useUnifiedTopology: true, useNewUrlParser: true })
      .then(() => {
        console.log("Connected to database");
      });
  } catch (e) {
    console.log("Cannot connect to database: ", e);
  }
};

module.exports = { connect };
