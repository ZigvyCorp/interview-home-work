const mongoose = require('mongoose');
require('dotenv').config();

const mongodb_url = process.env.MONGO_DB_URL;

mongoose.connect(mongodb_url);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database");
});

module.exports = db;
