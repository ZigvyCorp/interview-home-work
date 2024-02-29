const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
    });

    console.log("Connect Database Successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

module.exports = { connectDB };
