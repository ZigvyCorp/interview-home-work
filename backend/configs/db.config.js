const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);

    // Tạo index TTL cho collection sessions
    await conn.connection.db.collection("sessions").createIndex(
      { createdAt: 1 },
      { expireAfterSeconds: 60 * 60 * 24 * 1 } // 1 day
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.trimEnd.bold);
    process.exit();
  }
};

module.exports = connectDB();
