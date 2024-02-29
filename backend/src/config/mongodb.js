const mongoose = require("mongoose");
require("dotenv").config();
const User = require("../model/index");
const CONNECT_DB = async () => {
  try {
    const MONGODB_URI =
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ProjectX";

    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

module.exports = CONNECT_DB;
