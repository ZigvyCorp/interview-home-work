const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (e) {
    console.log(`Error: ${e}`);
    process.exit(1);
  }
};

module.exports = connectDB;
