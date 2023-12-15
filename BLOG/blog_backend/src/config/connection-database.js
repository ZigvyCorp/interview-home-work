const mongoose = require("mongoose");
const DB_MONGODB_CONNECTION_URL = process.env.DB_MONGODB_CONNECTION_URL;

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_MONGODB_CONNECTION_URL);
    console.log("Connected to DB");
  } catch (err) {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
  }
}

module.exports = connectToDatabase;
