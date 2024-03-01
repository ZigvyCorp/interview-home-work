const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connect database successfully');
  } catch (error) {
    console.log('connect database failure ', error);
  }
}

module.exports = connectDatabase;
