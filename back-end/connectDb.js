const mongoose = require("mongoose");

const URI =
  "mongodb+srv://phokhanhhung2409:hungpk2409@blogs.xmrhku6.mongodb.net/blogs";

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connect");
  } catch (error) {
    console.error("database connection failed!");
    process.exit(0);
  }
};

module.exports = connectDb;
